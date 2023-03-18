import './App.scss'
import { LoginPage } from './Pages/AuthPages/LoginPage'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { RegisterPage } from './Pages/AuthPages/RegisterPage'
import { POCEvent } from './Pages/POCEvent/POCEvent'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/reg" element={<RegisterPage />} />
                <Route path="/poc" element={<POCEvent />} />
            </Routes>
        </BrowserRouter>
    )
}

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
//     return(
//         <VotePage players={[{id:"123", username:"Danny", image:"123"}]}/>
//     )
// return (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<LoginPage />} />
//             <Route path="/reg" element={<RegisterPage />} />
//             <Route path="/poc" element={<POCEvent />} />
//         </Routes>
//     </BrowserRouter>
//     <div>
//         {isConnected ? 'Connected' : 'Disconnected'}
//         <POCEvent />
//         <EndGamePage imposter={"Pavel"} winningTeam={0} userTeam={1}/>
//     </div>
// )
// }
export default App
