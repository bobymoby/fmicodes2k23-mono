import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import { RoomPage } from './Pages/RoomPage/RoomPage'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { LoginPage } from './Pages/AuthPages/LoginPage'
import { RegisterPage } from './Pages/AuthPages/RegisterPage'
import { POCEvent } from './Pages/POCEvent/POCEvent'
import { socket } from './utils/socket'

// function App() {
//     return (
//         <div className="App">
//             <RoomPage
//                 tasks={[
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 2,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 0,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 0,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 0,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 2,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 2,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 2,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 2,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 0,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 0,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 0,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 2,
//                     },
//                     {
//                         name: 'task2',
//                         task: 'tasktasktasktasktasktask tasktasktasktasktasktask',
//                         userId: 2,
//                     },
//                 ]}
//             />
//         </div>
//     )
// }

function App() {
    const [isConnected, setIsConnected] = useState(socket.connected)

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true)
        })
        socket.on('disconnect', () => {
            setIsConnected(false)
        })
    }, [])
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<LoginPage />} />
        //         <Route path="/reg" element={<RegisterPage />} />
        //         <Route path="/poc" element={<POCEvent />} />
        //     </Routes>
        // </BrowserRouter>
        <div>
            {isConnected ? 'Connected' : 'Disconnected'}
            <POCEvent />
        </div>
    )
}

export default App
