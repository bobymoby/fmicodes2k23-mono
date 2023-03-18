import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
} from '@nestjs/websockets'
import { GameService } from './game.service'
import { UpdateGameDto } from './dto/update-game.dto'
import { Socket } from 'dgram'

@WebSocketGateway({ cors: true })
export class GameGateway {
    constructor(private readonly gameService: GameService) {}

    @SubscribeMessage('updateGame')
    update(@MessageBody() updateGameDto: UpdateGameDto) {
        return { event: 'updateGame', data: updateGameDto }
        // return this.gameService.update(updateGameDto.id, updateGameDto)
    }

    @SubscribeMessage('getGameDetails')
    getRoom(@MessageBody() body, @ConnectedSocket() client: Socket) {
        client.emit('gameDetails', {
            tasks: [
                {
                    name: 'Task 1',
                    open: false,
                },
                {
                    name: 'Task 2',
                    open: false,
                },
                {
                    name: 'Task 3',
                    open: false,
                },
                {
                    name: 'Task 4',
                    open: false,
                },
                {
                    name: 'Task 5',
                    open: true,
                },
                {
                    name: 'Task 6',
                    open: false,
                },
                {
                    name: 'Task 7',
                    open: false,
                },
            ],
        })
    }
}
