import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    username: string

    @MinLength(6)
    @MaxLength(20)
    @IsString()
    @ApiProperty()
    password: string
}
