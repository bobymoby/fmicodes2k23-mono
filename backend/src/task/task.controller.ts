import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { TaskService } from './task.service'
import { TestService } from './test.service'

@ApiTags('task')
@Controller('task')
export class TaskController {
    constructor(
        private readonly taskService: TaskService,
        private readonly testService: TestService,
    ) {}

    @ApiOperation({ summary: 'Get all tasks' })
    @Get()
    findAll() {
        return this.taskService.findAll()
    }

    @ApiOperation({ summary: 'Get task by id' })
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.taskService.findOne(id)
    }

    @ApiOperation({ summary: 'Create task' })
    @Post('create')
    create() {
        return this.taskService.create()
    }

    @ApiOperation({ summary: 'Run test by id(code: string body)' })
    @Post('test/:id')
    test(@Param('id') id: number, @Body('code') code: string) {
        return this.testService.runTest(id, code)
    }

    @ApiOperation({ summary: 'Set task code' })
    @Post(':id')
    setCode(@Param('id') id: number, @Body('code') code: string) {
        return this.taskService.setCode(id, code)
    }
}
