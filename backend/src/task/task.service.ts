import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Task } from './entities/task.entity'
import { TestService } from './test.service'

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
        private readonly testService: TestService,
    ) {}
    findAll() {
        return this.taskRepository.find({ relations: ['tests'] })
    }
    findOne(id: number) {
        return this.taskRepository.findOne({
            where: { id },
            relations: ['tests'],
        })
    }
    create() {
        const task = new Task()
        task.title = 'test'
        task.description = 'test'
        task.tests = []
        return this.taskRepository.save(task)
    }

    //WIP
    async findNRand(n: number) {
        const tasks = await this.taskRepository.find({
            relations: ['tests'],
            take: n,
        })
        return tasks
    }
}
