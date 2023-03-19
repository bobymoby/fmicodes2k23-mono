import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as fs from 'fs'
import { execAsync } from 'src/utils/execAsync'
import { Repository } from 'typeorm'
import { Test } from './entities/test.entity'
import { TaskService } from './task.service'

@Injectable()
export class TestService {
    private readonly TEST_PATH = '~/tests/'
    constructor(
        @InjectRepository(Test)
        private readonly testRepository: Repository<Test>,
        private readonly taskService: TaskService,
    ) {}
    async runTest(id: number) {
        const test = await this.testRepository.findOne({
            where: { id },
            relations: ['task'],
        })
        if (!test) {
            throw new NotFoundException('Test not found')
        }
        const { input } = test
        const { code } = test.task
        // const idPath = `${this.TEST_PATH}${id}`
        const idPath = `${id}`
        fs.writeFileSync(`${idPath}.py`, code)
        fs.writeFileSync(`${idPath}.in`, input)
        let error = false
        let stdout
        let stderr
        try {
            const data = await execAsync(
                `cat ${idPath}.in | python3 ${idPath}.py`,
                {},
            )
            stdout = data.stdout
            stderr = data.stderr
        } catch (e) {
            error = true
            stdout = e.stdout
            stderr = e.stderr
        }
        fs.unlinkSync(`${idPath}.py`)
        fs.unlinkSync(`${idPath}.in`)

        if (error) {
            return {
                status: 'error',
                message: stderr,
            }
        }
        stdout = stdout.trim()
        if (stdout !== test.output) {
            return {
                status: 'error',
                message: `Expected ${test.output} but got ${stdout}`,
            }
        }
        return {
            status: 'success',
            message: stdout,
        }
    }

    async runTests(taskId: number) {
        const task = await this.taskService.taskRepository.findOne({
            where: { id: taskId },
            relations: ['tests'],
        })
        if (!task) {
            throw new NotFoundException('Task not found')
        }
        const { tests } = task
        const results = await Promise.all(
            tests.map(async (test) => {
                const result = await this.runTest(test.id)
                return { test, result }
            }),
        )
        const fails = results.filter(
            (result) => result.result.status === 'error',
        )
        if (fails.length > 0) {
            return {
                status: 'error',
                fails,
            }
        }
        return { status: 'success' }
    }
}
