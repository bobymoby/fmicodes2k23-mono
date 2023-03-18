import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import { LoginPage } from './Pages/AuthPages/LoginPage'
import { EndGamePage } from './Pages/EndGamePage/EndGamePage'
import { RoomPage } from './Pages/RoomPage/RoomPage'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { RegisterPage } from './Pages/AuthPages/RegisterPage'
import { POCEvent } from './Pages/POCEvent/POCEvent'
import { socket } from './utils/socket'

function App(){
    return (
        <RoomPage tasks={[
            {id: 1, name:'name1', task:'task', userId:3},
            {id: 2, name:'name', task:'task', userId:2},
            {id: 3, name:'name', task:'task', userId:0},
            {id: 4, name:'name', task:'task', userId:2},
            {id: 5, name:'name', task:'task', userId:2},
            {id: 1, name:'name1', task:'task', userId:3},
            {id: 2, name:'name', task:'task', userId:2},
            {id: 3, name:'name', task:'task', userId:0},
            {id: 4, name:'name', task:'task', userId:2},
            {id: 5, name:'name', task:'task', userId:2},
            {id: 1, name:'name1', task:'task', userId:3},
            {id: 2, name:'name', task:'task', userId:2},
            {id: 3, name:'name', task:'task', userId:0},
        ]}/>
    )
}

// function App() {
//     return (
//         // <BrowserRouter>
//         //     <Routes>
//         //         <Route path="/" element={<LoginPage />} />
//         //         <Route path="/reg" element={<RegisterPage />} />
//         //         <Route path="/poc" element={<POCEvent />} />
//         //     </Routes>
//         // </BrowserRouter>
//         <div>
//             {/* {isConnected ? 'Connected' : 'Disconnected'}
//             <POCEvent /> */}
//         </div>
//     )
// }

// function App() {
//     const [isConnected, setIsConnected] = useState(socket.connected)

//     useEffect(() => {
//         socket.on('connect', () => {
//             setIsConnected(true)
//         })
//         socket.on('disconnect', () => {
//             setIsConnected(false)
//         })
//     }, [])
//     return (
//         // <BrowserRouter>
//         //     <Routes>
//         //         <Route path="/" element={<LoginPage />} />
//         //         <Route path="/reg" element={<RegisterPage />} />
//         //         <Route path="/poc" element={<POCEvent />} />
//         //     </Routes>
//         // </BrowserRouter>
//         // <div>
//         //     {isConnected ? 'Connected' : 'Disconnected'}
//         //     <POCEvent />
//         // </div>
//     )
// }

export default App
