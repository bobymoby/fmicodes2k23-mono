import { PartialType } from '@nestjs/swagger'
import { Game } from '../entities/game.entity'

export class UpdateGameDto extends PartialType(Game) {}
