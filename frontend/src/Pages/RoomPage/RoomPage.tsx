import React from 'react'
import { Task } from '../../types'
import styles from './roompage.module.scss'
import { TaskComponent } from '../../components/Task/TaskComponent'

interface IRoomPageProps {
    tasks: Task[]
}

export const RoomPage: React.FC<IRoomPageProps> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.editor}>{/* TODO */}</div>
            <div className={styles.column}>
                <div className={styles.card}>
                    {props.tasks.map((task) => (
                        <TaskComponent name="name" task="task" userId={2} />
                    ))}
                </div>
                <div className={styles.card}></div>
            </div>
        </div>
    )
}
