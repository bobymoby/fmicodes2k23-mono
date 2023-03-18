import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Task } from './entities/task.entity'
import { Test } from './entities/test.entity'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'
import { TestService } from './test.service'

@Module({
    imports: [TypeOrmModule.forFeature([Task, Test])],
    controllers: [TaskController],
    providers: [TaskService, TestService],
    exports: [TaskService, TestService],
})
export class TaskModule {}
