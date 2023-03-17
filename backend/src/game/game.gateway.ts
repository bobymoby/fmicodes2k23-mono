import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
} from '@nestjs/websockets'
import { GameService } from './game.service'
import { UpdateGameDto } from './dto/update-game.dto'

@WebSocketGateway()
export class GameGateway {
    constructor(private readonly gameService: GameService) {}

    @SubscribeMessage('updateGame')
    update(@MessageBody() updateGameDto: UpdateGameDto) {
        // return this.gameService.update(updateGameDto.id, updateGameDto)
    }
}
