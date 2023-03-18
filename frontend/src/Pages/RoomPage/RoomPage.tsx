import React from 'react'
import { Task } from '../../types'
import styles from './roompage.module.scss'
import { TaskComponent } from '../../components/Task/TaskComponent'
import { TaskConditionComponent } from '../../components/Task/TaskConditionComponent'
import Editor from '@monaco-editor/react'

interface IRoomPageProps {
    tasks: Task[]
}

export const RoomPage: React.FC<IRoomPageProps> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.editor}>
                <Editor height="100%" language="python" value="print('Hello, World!');" />
            </div>
            <div className={styles.column}>
                <div className={styles.card}>
                <h2>All tasks:</h2>
                    {props.tasks.map((task) => (
                        TaskComponent(task)
                    ))}
                </div>
                <div className={styles.card}>
                    {TaskConditionComponent({name:"sdfsdfs", task:"sfgvsfgvsfdgrvds"})}
                    <button onClick={() => {}}> Submit Task</button>
                </div>
            </div>
        </div>
    )
}
