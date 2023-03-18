import { Module } from '@nestjs/common'
import { GameService } from './game.service'
import { GameGateway } from './game.gateway'
import { GameController } from './game.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Game } from './entities/game.entity'
import { UserModule } from 'src/user/user.module'

@Module({
    imports: [TypeOrmModule.forFeature([Game]), UserModule],
    providers: [GameGateway, GameService],
    controllers: [GameController],
    exports: [GameService],
})
export class GameModule {}
