import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import { Game } from 'src/game/entities/game.entity'
import { TaskService } from 'src/task/task.service'
import { hashString } from 'src/utils/hash'
import { DeleteResult, Repository, UpdateResult } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { GetUserDto } from './dto/get-user.dto'
import { LoginUserDto } from './dto/login-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        public readonly userRepository: Repository<User>,
        private readonly taskService: TaskService,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const { password, ...details } = createUserDto

        const existingUser = await this.userRepository.findOne({
            where: { username: details.username },
        })
        if (existingUser) {
            throw new ConflictException('Username is taken')
        }

        const hash = await hashString(password)

        const user = this.userRepository.create({
            password: hash,
            ...details,
        })

        await this.userRepository.save(user)
        return { ...user, password: undefined }
    }

    async findAll(filters: GetUserDto): Promise<User[]> {
        return (await this.userRepository.find({ where: filters })).map(
            (user: User) => {
                return { ...user, password: undefined }
            },
        )
    }

    async findOne(id: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id } })

        if (!user) {
            throw new NotFoundException('User not found')
        }

        return { ...user, password: undefined }
    }

    async findByUsername(username: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { username } })

        if (!user) {
            throw new NotFoundException('User not found')
        }

        return { ...user, password: undefined }
    }

    async update(
        id: string,
        updateUserDto: UpdateUserDto,
    ): Promise<UpdateResult> {
        const { password, ...details } = updateUserDto
        if (password) {
            const hash = await hashString(password)

            return this.userRepository.update(
                { id },
                { password: hash, ...details },
            )
        }
        return this.userRepository.update({ id }, updateUserDto)
    }

    async updateByUsername(
        username: string,
        updateUserDto: UpdateUserDto,
    ): Promise<DeleteResult> {
        const { password, ...details } = updateUserDto
        if (password) {
            const hash = await hashString(password)

            return this.userRepository.update(
                { username },
                { password: hash, ...details },
            )
        }

        return this.userRepository.update({ username }, { ...details })
    }

    removeById(id: string): Promise<DeleteResult> {
        return this.userRepository.delete(id)
    }

    removeByUsername(username: string): Promise<DeleteResult> {
        return this.userRepository.delete({ username })
    }

    async login(loginUserDto: LoginUserDto): Promise<User> {
        const { username, password } = loginUserDto
        const user = await this.userRepository.findOne({ where: { username } })

        const checkPassword =
            user && (await bcrypt.compare(password, user.password))

        if (!checkPassword) {
            throw new NotFoundException('User not found')
        }

        return { ...user, password: undefined }
    }

    async joinGame(id: string, game: Game) {
        const user = await this.findOne(id)
        if (!user) {
            throw new NotFoundException('User not found')
        }
        user.game = game
        await this.userRepository.save(user)
    }

    async leaveGame(id: string) {
        const user = await this.findOne(id)
        if (!user) {
            throw new NotFoundException('User not found')
        }
        user.game = null
        await this.userRepository.save(user)
    }

    async setOpenTask(id: string, taskId: number) {
        const user = await this.findOne(id)
        if (!user) {
            throw new NotFoundException('User not found')
        }
        if (taskId === -1) {
            user.openTask = null
            await this.userRepository.save(user)
            return
        }
        const task = await this.taskService.findOne(taskId)
        if (!task) {
            throw new NotFoundException('Task not found')
        }
        if (task.openedBy) {
            throw new ConflictException('Task is already opened')
        }
        user.openTask = task
        await this.userRepository.save(user)
    }
}
