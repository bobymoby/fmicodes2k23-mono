import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Task } from './entities/task.entity'

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        public readonly taskRepository: Repository<Task>,
    ) {}
    findAll() {
        return this.taskRepository.find({ relations: ['tests'] })
    }
    findOne(id: number) {
        return this.taskRepository.findOne({
            where: { id },
            relations: ['tests', 'openedBy'],
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

    async setCode(id: number, code: string) {
        console.log(code)
        const task = await this.taskRepository.findOne({ where: { id } })
        if (!task) {
            throw new NotFoundException('Task not found')
        }
        task.code = code
        return this.taskRepository.save(task)
    }
}
