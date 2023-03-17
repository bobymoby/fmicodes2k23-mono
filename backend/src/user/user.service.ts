import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository, UpdateResult } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import * as bcrypt from 'bcrypt'
import { hashString } from 'src/utils/hash'
import { LoginUserDto } from './dto/login-user.dto'
import { GetUserDto } from './dto/get-user.dto'
import { Game } from 'src/game/entities/game.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
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

    async removeById(id: string): Promise<DeleteResult> {
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
}
