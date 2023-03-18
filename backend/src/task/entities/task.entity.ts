import { Game } from 'src/game/entities/game.entity'
import {
    Column,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Test } from './test.entity'

@Entity()
export class Task {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @OneToMany(() => Test, (test) => test.task)
    tests: Test[]

    @ManyToMany(() => Game, (game) => game.tasks)
    games: Game[]
}
