import React, { useEffect, useRef, useState } from 'react'
import { Task } from '../../types'
import styles from './roompage.module.scss'
import { TaskComponent } from '../../components/Task/TaskComponent'
import { TaskConditionComponent } from '../../components/Task/TaskConditionComponent'
import Editor from '@monaco-editor/react'
import { socket } from '../../utils/socket'
import { CONSTANTS } from '../../constants'
import { useSearchParams } from 'react-router-dom'
import Countdown from 'react-countdown'

const USERS = [
    'c6cb8059-d2f0-4ca6-9810-2d5836ee45fb',
    '87f71115-7c6b-48f1-95b5-93d0c57f3d05',
    'f25f48ac-01c8-4417-9c5f-dbea25993d8b',
    '8b730986-bebb-4ef7-ae75-e31d95884a4a',
]

interface IRoomPageProps {
    endGame: () => void
}
export const RoomPage: React.FC<IRoomPageProps> = ({ endGame }) => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)
    const gameId = 'bd309693-3989-4e03-9682-526c5d2562f2'
    const [userId, setUserId] = useState('')
    const [code, setCode] = useState('')
    const [time, setTime] = useState(Date().toString())

    const [searchParams, setSearchParams] = useSearchParams()

    const countdownRenderer = ({ minutes, seconds, completed }: any) => {
        if (completed) {
            return <span>Time is up</span>
        }
        return (
            <span>
                {String(minutes).padStart(2, '0')}:
                {String(seconds).padStart(2, '0')}
            </span>
        )
    }

    useEffect(() => {
        setUserId(USERS[parseInt(searchParams.get('user') || '0')])
    }, [])

    useEffect(() => {
        socket.emit('getGameDetails', {
            userId,
        })
        socket.on('gameState/' + gameId, (data) => {
            setTasks(data.game.tasks)
        })
    }, [userId])

    const selectTask = async (task: Task) => {
        await fetch(`http://${CONSTANTS.SERVER}/user/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskId: task.id }),
        }).then(async (res) => {
            if (res.ok) {
                if (selectedTask) {
                    await fetch(
                        `http://${CONSTANTS.SERVER}/task/${selectedTask.id}`,
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
        <div className={styles.container}>
            <div className={styles.editor}>
                <Editor
                    height="100%"
                    defaultLanguage="python"
                    language="python"
                    value={code}
                    theme="vs-dark"
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
                    <Countdown
                        // date={Date.now() + 180000}
                        date={Date.now() + 60000}
                        renderer={countdownRenderer}
                        onComplete={() => {
                            endGame()
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
