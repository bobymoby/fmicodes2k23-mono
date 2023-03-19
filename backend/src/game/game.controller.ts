import {
    Controller,
    Get,
    Param,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { GameService } from './game.service'

@ApiTags('game')
@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @ApiOperation({ summary: 'Get all games' })
    @Get()
    findAll() {
        return this.gameService.findAll()
    }

    @ApiOperation({ summary: 'Get game by id' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.gameService.findOne(id)
    }

    @ApiOperation({ summary: "Run all game's tasks' tests" })
    @Get(':id/tests')
    tests(@Param('id') id: string) {
        return this.gameService.runGameTests(id)
    }

    @ApiOperation({ summary: 'Join/create game' })
    @Post('join')
    @UseGuards(JwtAuthGuard)
    join(@Request() req) {
        console.log('join')
        return this.gameService.join(req.user.id)
    }

    @ApiOperation({ summary: 'Join game by id' })
    @Post('join/:id')
    @UseGuards(JwtAuthGuard)
    joinById(@Request() req, @Param('id') id: string) {
        return this.gameService.joinPrivate(req.user.id, id)
    }
}
