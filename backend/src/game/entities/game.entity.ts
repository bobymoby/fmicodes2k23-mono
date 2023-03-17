import { Task } from 'src/task/entities/task.entity'
import { User } from 'src/user/entities/user.entity'
import {
    Column,
    Entity,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

export enum GameStatus {
    WAITING = 'WAITING',
    WAITINGSOCKET = 'WAITINGSOCKET',
    STARTED = 'STARTED',
    VOTING = 'VOTING',
    FINISHED = 'FINISHED',
}

@Entity()
export class Game {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToMany(() => User, (user) => user.game)
    users: User[]

    @OneToOne(() => User, (user) => user.game)
    imposter: User

    @ManyToMany(() => Task, (task) => task.games)
    tasks: Task[]

    @Column({ default: false })
    private: boolean

    @Column()
    status: GameStatus
}
