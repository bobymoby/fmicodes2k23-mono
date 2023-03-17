import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Test } from './entities/test.entity'
import { execAsync } from 'src/utils/execAsync'
import * as fs from 'fs'

@Injectable()
export class TestService {
    private readonly TEST_PATH =
        'C:\\Users\\imbob\\Desktop\\fmicodes2k23-mono\\tests\\'
    constructor(
        @InjectRepository(Test)
        private readonly testRepository: Repository<Test>,
    ) {}
    async runTest(id: number, code: string) {
        const test = await this.testRepository.findOne({ where: { id } })
        if (!test) {
            throw new NotFoundException('Test not found')
        }
        const { input } = test
        const idPath = `${this.TEST_PATH}${id}`
        await fs.writeFileSync(`${idPath}.py`, code)
        await fs.writeFileSync(`${idPath}.in`, input)
        let error = false
        let stdout
        let stderr
        try {
            const data = await execAsync(
                `type ${idPath}.in | python -I ${idPath}.py`,
                {},
            )
            stdout = data.stdout
            stderr = data.stderr
        } catch (e) {
            error = true
            stdout = e.stdout
            stderr = e.stderr
        }
        await fs.unlinkSync(`${idPath}.py`)
        await fs.unlinkSync(`${idPath}.in`)

        if (error) {
            return {
                status: 'error',
                message: stderr,
            }
        }
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
}
