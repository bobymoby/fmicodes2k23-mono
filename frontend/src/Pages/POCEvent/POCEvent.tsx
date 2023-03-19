import { useEffect, useState } from 'react'
import { CONSTANTS } from '../../constants'
import { socket } from '../../utils/socket'

export const POCEvent = () => {
    const [tasks, setTasks] = useState([])
    const gameId = 'bd309693-3989-4e03-9682-526c5d2562f2'
    useEffect(() => {
        fetch(`${CONSTANTS.SERVER}/game/${gameId}`)
    }, [])

    return (
        <div>
            <p>POC</p>
            {tasks.map((task: any) => (
                <p>{task.title}</p>
            ))}
        </div>
    )
}
