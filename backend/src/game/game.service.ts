import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserService } from 'src/user/user.service'
import { randUnder } from 'src/utils/rand'
import { Repository } from 'typeorm'
import { Game, GameStatus } from './entities/game.entity'

@Injectable()
export class GameService {
    readonly MAX_PLAYERS = 3
    constructor(
        @InjectRepository(Game)
        private gameRepository: Repository<Game>,
        private readonly userService: UserService,
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
        return this.gameRepository.find({ relations: ['users'] })
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
            where: { status: GameStatus.WAITINGSOCKET, private: false },
            relations: ['users'],
        })

        if (waitingGames.length > 0) {
            await this.userService.joinGame(userId, waitingGames[0])
            let currentGame = await this.findOne(waitingGames[0].id)
            if (currentGame.users.length === this.MAX_PLAYERS) {
                currentGame = await this.startGame(currentGame)
            }
            return currentGame
        }

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

    startGame(game: Game) {
        game.status = GameStatus.WAITINGSOCKET
        const imposterIndex = randUnder(game.users.length)
        game.imposter = game.users[imposterIndex]
        return this.gameRepository.save(game)
    }

    leave(userId: string) {
        this.userService.leaveGame(userId)
    }
}
