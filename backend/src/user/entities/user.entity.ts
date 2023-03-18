import { Game } from 'src/game/entities/game.entity'
import { Task } from 'src/task/entities/task.entity'
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @Column({ nullable: true })
    image: string

    @ManyToOne(() => Game, (game) => game.users)
    game: Game

    @OneToOne(() => Task, (task) => task.openedBy)
    @JoinColumn()
    openTask: Task

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
