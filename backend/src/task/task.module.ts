import { Module } from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskController } from './task.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Task } from './entities/task.entity'
import { TestService } from './test.service'
import { Test } from './entities/test.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Task, Test])],
    controllers: [TaskController],
    providers: [TaskService, TestService],
    exports: [TaskService, TestService],
})
export class TaskModule {}
