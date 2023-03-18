import { Task } from '../../types'
import styles from './task.module.scss'

interface ITaskProps {
    task: Task
    onClick: () => void
}

export const TaskComponent: React.FC<ITaskProps> = ({ task, onClick }) => {
    return (
        <div className={styles.list} onClick={onClick}>
            <div className={styles.icon}>{!!task.openedBy ? '🔒' : '👉'}</div>
            <div className={styles.name}>{task.title}</div>
            <div className={styles.seek}>{task.openedBy?.username || ''}</div>
        </div>
    )
}
