import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { CreateUserDto } from './dto/create-user.dto'
import { GetUserDto } from './dto/get-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserService } from './user.service'

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: 'Create user' })
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto)
    }

    @ApiOperation({ summary: 'Get user/s' })
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Query() getUserDto: GetUserDto) {
        return await this.userService.findAll(getUserDto)
    }

    @ApiOperation({ summary: 'Update user by id' })
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return await this.userService.update(id, updateUserDto)
    }

    @ApiOperation({ summary: 'Delete user by id' })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.userService.removeById(id)
    }

    @ApiOperation({ summary: "Set user's open task" })
    @Post(':id')
    async setOpenTask(@Param('id') id: string, @Body('taskId') taskId: number) {
        return await this.userService.setOpenTask(id, taskId)
    }
}
