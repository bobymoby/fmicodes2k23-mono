import { Game } from 'src/game/entities/game.entity'
import { User } from 'src/user/entities/user.entity'
import {
    Column,
    Entity,
    ManyToMany,
    OneToMany,
    OneToOne,
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

    @Column({ nullable: true })
    code: string

    @OneToMany(() => Test, (test) => test.task)
    tests: Test[]

    @ManyToMany(() => Game, (game) => game.tasks)
    games: Game[]

    @OneToOne(() => User, (user) => user.openTask)
    openedBy: User
}
