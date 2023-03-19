import { useEffect, useState } from 'react'
import { CONSTANTS } from '../../constants'
import { socket } from '../../utils/socket'

export const POCEvent = () => {
    const [tasks, setTasks] = useState([])
    const [responses, setResponses] = useState<any>([])
    const gameId = 'bd309693-3989-4e03-9682-526c5d2562f2'
    useEffect(() => {
        fetch(`http://localhost:3000/game/${gameId}`).then((res: any) => {
            res.json().then((data: any) => {
                setTasks(data.tasks)
            })
        })
    }, [])

    useEffect(() => {
        console.log({ tasks })
        tasks.forEach(async (task: any) => {
            const res = await fetch(
                `http://localhost:3000/task/${task.id}/tests`,
            )
            const data = await res.json()
            setResponses((responses: any) => [
                ...responses,
                { taskTitle: task.title, ...data },
            ])
        })
    }, [tasks])

    useEffect(() => {
        console.log({ responses })
    }, [responses])

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: 'white',
            }}
        >
            <h1>POC tests</h1>
            {tasks.map((task: any) => (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        color: 'white',
                    }}
                >
                    <h1>{task.title}</h1>
                    {responses
                        .filter((res: any) => res.taskTitle === task.title)
                        .map((res: any, index: number) => {
                            return (
                                <p>
                                    test {index + 1}:{res.status}
                                </p>
                            )
                        })}
                </div>
            ))}
        </div>
    )
}
