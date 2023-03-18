import './App.scss'
import { LoginPage } from './Pages/AuthPages/LoginPage'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { RegisterPage } from './Pages/AuthPages/RegisterPage'
import { POCEvent } from './Pages/POCEvent/POCEvent'
import { RoomPage } from './Pages/RoomPage/RoomPage'
import { LobbyPage } from './Pages/LobbyPage/LobbyPage'
import { VotePage } from './Pages/VotePage/VotePage'
import { JoinPage } from './Pages/JoinPage/JoinPage'
import { RulesPage } from './Pages/RulesPage/RulesPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/reg" element={<RegisterPage />} />
                <Route path="/poc" element={<POCEvent />} />
                <Route path="/join" element={<JoinPage/>} />
                <Route path="/room" element={<RoomPage tasks={[{task:"task1", userId:"123", name:"task1", id:"1"}]}/>} />
                <Route path="lobby" element={<LobbyPage code={"acc"} players={[{id:"aa", username:"aab", image:"aab"}]} />} />
                <Route path="rules" element={<RulesPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App
