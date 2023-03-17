import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { TaskModule } from './task/task.module'
import { GameModule } from './game/game.module'
import { User } from './user/entities/user.entity'
import { Game } from './game/entities/game.entity'
import { Task } from './task/entities/task.entity'
import { Test } from './task/entities/test.entity'

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DB_HOST'),
                port: parseInt(configService.get('DB_PORT')),
                username: configService.get('DB_USER'),
                password: configService.get('DB_PASS'),
                database: configService.get('DB_DATABASE'),
                entities: [User, Game, Task, Test],
                synchronize: true,
            }),
        }),
        UserModule,
        AuthModule,
        TaskModule,
        GameModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
