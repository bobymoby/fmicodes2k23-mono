import { Task } from 'src/task/entities/task.entity'
import { User } from 'src/user/entities/user.entity'
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
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

    @OneToOne(() => User)
    @JoinColumn()
    imposter: User

    @ManyToMany(() => Task, (task) => task.games)
    @JoinTable()
    tasks: Task[]

    @Column()
    private: boolean

    @Column()
    status: GameStatus
}
