import { useState } from 'react'
import { socket } from '../../utils/socket'

export const POCEvent = () => {
    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState<any>(null)
    const gameId = '3a926831-5c2b-4f65-b90e-eb79b94001cc'
    // const userId = 'd8a9086f-1108-4c8c-991c-f34e13f0768a'
    const [userId, setUserId] = useState('')
    const handleUserChange = (event: any) => {
        setUserId(event.target.value)
    }
    const handleConnect = () => {
        socket.emit('getGameDetails', {
            userId,
        })
    }
    socket.on('gameState/' + gameId, (data) => {
        setTasks(data.game.tasks)
    })

    const selectTask = async (task: any) => {
        fetch('http://localhost:3000/user/' + userId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskId: task.id }),
        }).then((res) => {
            if (res.ok) {
                setSelectedTask(task)
                socket.emit('getGameDetails', {
                    userId,
                })
            }
        })
    }

    const handleCodeChange = (event: any) => {
        const newTask = { ...selectedTask, code: event.target.value }
        setSelectedTask(newTask)
        fetch('http://localhost:3000/task/' + selectedTask.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: newTask.code }),
        })
        // .then((res) => {
        //     socket.emit('getGameDetails', {
        //         userId,
        //     })
        // })
        // .catch((err) => console.log(err))
    }
    return (
        <div>
            <p>POC</p>
            <input type="text" value={userId} onChange={handleUserChange} />
            <button onClick={handleConnect}>connect</button>
            {tasks.map((task: any) => {
                return (
                    <div onClick={() => selectTask(task)}>
                        {task.title}{' '}
                        {task.openedBy
                            ? 'opened by ' + task.openedBy.username
                            : 'not open'}
                    </div>
                )
            })}
            {selectedTask && (
                <div>
                    <p>selected task {selectedTask.title}</p>
                    <textarea
                        value={selectedTask.code || ''}
                        onChange={handleCodeChange}
                    />
                </div>
            )}
        </div>
    )
}
