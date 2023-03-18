import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskModule } from 'src/task/task.module'
import { UserModule } from 'src/user/user.module'
import { Game } from './entities/game.entity'
import { GameController } from './game.controller'
import { GameGateway } from './game.gateway'
import { GameService } from './game.service'

@Module({
    imports: [TypeOrmModule.forFeature([Game]), UserModule, TaskModule],
    providers: [GameGateway, GameService],
    controllers: [GameController],
    exports: [GameService],
})
export class GameModule {}
