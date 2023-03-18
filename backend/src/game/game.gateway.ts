import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets'
import { Socket } from 'dgram'
import { UpdateGameDto } from './dto/update-game.dto'
import { GameService } from './game.service'

@WebSocketGateway({ cors: true })
export class GameGateway {
    constructor(private readonly gameService: GameService) {}

    @WebSocketServer()
    server: Socket

    @SubscribeMessage('updateGame')
    update(@MessageBody() updateGameDto: UpdateGameDto) {
        return { event: 'updateGame', data: updateGameDto }
        // return this.gameService.update(updateGameDto.id, updateGameDto)
    }

    @SubscribeMessage('getGameDetails')
    getRoom(@MessageBody() body) {
        const { userId } = body
        return this.gameService.sendStateWithSocket(userId, this.server)
    }
}
