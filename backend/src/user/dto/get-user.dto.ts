import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class GetUserDto {
    @IsOptional()
    @ApiProperty({ required: false })
    id: string

    @IsOptional()
    @ApiProperty({ required: false })
    username: string
}
