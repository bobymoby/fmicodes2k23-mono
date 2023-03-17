import { Injectable } from '@nestjs/common'
import { UserService } from 'src/user/user.service'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/user/entities/user.entity'

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.login({ username, password })

        return user || null
    }

    async login(user: User) {
        return {
            access_token: this.jwtService.sign({ ...user }),
        }
    }
}
