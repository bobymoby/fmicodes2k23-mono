import React from 'react'
import logo from './logo.svg'
import './App.scss'
import { RoomPage } from './Pages/RoomPage/RoomPage'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { LoginPage } from './Pages/AuthPages/LoginPage'
import { RegisterPage } from './Pages/AuthPages/RegisterPage'

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
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/reg" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
