import './App.scss'
import { LoginPage } from './Pages/AuthPages/LoginPage'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { RegisterPage } from './Pages/AuthPages/RegisterPage'
import { POCEvent } from './Pages/POCEvent/POCEvent'
import { RoomPage } from './Pages/RoomPage/RoomPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/reg" element={<RegisterPage />} />
                <Route path="/poc" element={<POCEvent />} />
                <Route path="/room" element={<RoomPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App
