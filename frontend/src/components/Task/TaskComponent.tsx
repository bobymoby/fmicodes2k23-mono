import styles from './task.module.scss'

interface ITaskProps {
    name: string
    task: string
    userId: number
}

function changeCurrent(id: string){
    //TODO
}

export const TaskComponent: React.FC<ITaskProps> = (props) => {
    return (
        <div className={styles.list} onClick={(e) => {changeCurrent(e.currentTarget.id)}}>
            <div className={styles.icon}>{props.userId ? '🔒' : '👉'}</div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.seek}>
                {props.userId ? props.userId : ''}
            </div>
        </div>
    )
}
