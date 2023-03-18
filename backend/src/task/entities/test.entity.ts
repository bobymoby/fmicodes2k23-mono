import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Task } from './task.entity'

@Entity()
export class Test {
    @PrimaryGeneratedColumn('increment')
    id: number

    @ManyToOne(() => Task, (task) => task.tests)
    task: Task

    @Column()
    input: string

    @Column()
    output: string
}
