import React, { useEffect, useRef, useState } from 'react'
import { Task } from '../../types'
import styles from './roompage.module.scss'
import { TaskComponent } from '../../components/Task/TaskComponent'
import { TaskConditionComponent } from '../../components/Task/TaskConditionComponent'
import Editor from '@monaco-editor/react'
import { socket } from '../../utils/socket'

export const RoomPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)
    const gameId = '3a926831-5c2b-4f65-b90e-eb79b94001cc'
    const [userId, setUserId] = useState('')
    const [code, setCode] = useState('')

    const handleUserChange = (event: any) => {
        setUserId(event.target.value)
    }
    const handleConnect = () => {
        socket.emit('getGameDetails', {
            userId,
        })
        socket.on('gameState/' + gameId, (data) => {
            setTasks(data.game.tasks)
            // console.log(data.game.tasks)
        })
    }

    const selectTask = async (task: Task) => {
        await fetch('http://localhost:3000/user/' + userId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskId: task.id }),
        }).then(async (res) => {
            if (res.ok) {
                if (selectedTask) {
                    await fetch(
                        'http://localhost:3000/task/' + selectedTask.id,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ code }),
                        },
                    )
                }
                setCode(task.code)
                setSelectedTask(task)
                // console.log({ task })
                socket.emit('getGameDetails', {
                    userId,
                })
            }
        })
    }
    return (
        <>
            <input type="text" value={userId} onChange={handleUserChange} />
            <button onClick={handleConnect}>connect</button>
            <div className={styles.container}>
                <div className={styles.editor}>
                    <Editor
                        height="100%"
                        defaultLanguage="python"
                        language="python"
                        value={code}
                        // onChange={handleCodeChange}
                        onChange={(value) => setCode(value || '')}
                    />
                </div>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <h2>All tasks:</h2>
                        {tasks.map((task: Task) => {
                            return (
                                <TaskComponent
                                    task={task}
                                    onClick={() => {
                                        selectTask(task)
                                    }}
                                />
                            )
                        })}
                    </div>
                    <div className={styles.card}>
                        <TaskConditionComponent task={selectedTask} />
                        <button onClick={() => {}}> Submit Task</button>
                    </div>
                </div>
            </div>
        </>
    )
}
