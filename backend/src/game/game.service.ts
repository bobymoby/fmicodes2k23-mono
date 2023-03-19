import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Socket } from 'dgram'
import { TaskService } from 'src/task/task.service'
import { TestService } from 'src/task/test.service'
import { UserService } from 'src/user/user.service'
import { randUnder } from 'src/utils/randUnder'
import { Repository } from 'typeorm'
import { Game, GameStatus } from './entities/game.entity'

@Injectable()
export class GameService {
    readonly MAX_PLAYERS = 4
    constructor(
        @InjectRepository(Game)
        private gameRepository: Repository<Game>,
        private readonly userService: UserService,
        private readonly taskService: TaskService,
        private readonly testService: TestService,
    ) {}
    async create(userId: string, privateGame = false) {
        const user = await this.userService.findOne(userId)
        if (!user) {
            throw new NotFoundException('User not found')
        }
        const game = this.gameRepository.create({
            status: GameStatus.WAITING,
            users: [user],
            private: privateGame,
        })
        return this.gameRepository.save(game)
    }

    findAll() {
        return this.gameRepository.find({
            relations: ['users', 'tasks', 'imposter'],
        })
    }

    findOne(id: string) {
        return this.gameRepository.findOne({
            where: { id },
            relations: ['users'],
        })
    }

    remove(id: string) {
        this.gameRepository.delete(id)
    }

    async join(userId: string) {
        const waitingGames = await this.gameRepository.find({
            where: { status: GameStatus.WAITING, private: false },
            relations: ['users'],
        })

        console.log({ waitingGames })

        if (waitingGames.length > 0) {
            console.log('joining game')
            await this.userService.joinGame(userId, waitingGames[0])
            let currentGame = await this.findOne(waitingGames[0].id)
            if (currentGame.users.length === this.MAX_PLAYERS) {
                currentGame = await this.startGame(currentGame)
            }
            return currentGame
        }
        console.log('creating game')
        return this.create(userId)
    }

    async joinPrivate(userId: string, gameId: string) {
        const game = await this.findOne(gameId)
        if (!game) {
            throw new NotFoundException('Game not found')
        }
        if (game.status !== GameStatus.WAITING) {
            throw new NotFoundException('Game is already started')
        }
        if (game.users.length === this.MAX_PLAYERS) {
            throw new NotFoundException('Game is full')
        }
        await this.userService.joinGame(userId, game)
        let currentGame = await this.findOne(gameId)
        if (currentGame.users.length === this.MAX_PLAYERS) {
            currentGame = await this.startGame(currentGame)
        }
        return currentGame
    }

    async startGame(game: Game) {
        game.status = GameStatus.WAITINGSOCKET
        const imposterIndex = randUnder(game.users.length)
        game.imposter = game.users[imposterIndex]

        const tasks = await this.taskService.findNRand(5)
        game.tasks = tasks

        return this.gameRepository.save(game)
    }

    leave(userId: string) {
        this.userService.leaveGame(userId)
    }

    async sendStateWithSocket(userId: string, client: Socket) {
        const user = await this.userService.userRepository.findOne({
            where: { id: userId },
            relations: ['game'],
        })
        if (!user) {
            throw new NotFoundException('User not found')
        }
        const game = await this.gameRepository.findOne({
            where: { id: user.game.id },
            relations: ['users', 'tasks', 'imposter', 'tasks.openedBy'],
        })
        if (!game) {
            throw new NotFoundException('User not in game')
        }
        if (game.status === GameStatus.WAITINGSOCKET) {
            game.status = GameStatus.STARTED
            this.gameRepository.save(game)
        }
        client.emit('gameState/' + game.id, { game })
    }

    async runGameTests(gameId: string) {
        const game = await this.gameRepository.findOne({
            where: { id: gameId },
            relations: ['tasks', 'tasks.tests'],
        })
        if (!game) {
            throw new NotFoundException('Game not found')
        }
        const tasks = game.tasks
        const tests = tasks.map((task) => task.tests).flat()
        const results = await Promise.all(
            tests.map((test) => this.testService.runTest(test.id)),
        )
        const fails = results.filter((result) => result.status === 'error')
        return { total: tests.length, fails: fails.length }
    }
}
