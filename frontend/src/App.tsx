import './App.scss'
import { LoginPage } from './Pages/AuthPages/LoginPage'
import { BrowserRouter } from 'react-router-dom'
import { Navigate, Route, Routes } from 'react-router'
import { RegisterPage } from './Pages/AuthPages/RegisterPage'
import { POCEvent } from './Pages/POCEvent/POCEvent'
import { RoomPage } from './Pages/RoomPage/RoomPage'
import { LobbyPage } from './Pages/LobbyPage/LobbyPage'
import { VotePage } from './Pages/VotePage/VotePage'
import { JoinPage } from './Pages/JoinPage/JoinPage'
import { RulesPage } from './Pages/RulesPage/RulesPage'
import { EndGamePage } from './Pages/EndGamePage/EndGamePage'
import { useState } from 'react'
import { Kick } from './Pages/KickPage/Kick'

function App() {
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [shouldRedirectToKick, setRedirectToKick] = useState(false)
    const [shouldRedirectToEnd, setRedirectToEnd] = useState(false)
    const onEndGame = () => {
        setShouldRedirect(true)
    }
    return (
        <BrowserRouter>
            <head>
                <meta
                    name="viewport"
                    content="initial-scale=1, user-scalable=no"
                ></meta>
            </head>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/reg" element={<RegisterPage />} />
                <Route path="/poc" element={<POCEvent />} />
                <Route
                    path="/kick"
                    element={
                        shouldRedirectToEnd ? (
                            <Navigate replace to="/end" />
                        ) : (
                            <Kick
                                id="123"
                                username="pavel"
                                image="image"
                                redirectToEnd={() => setRedirectToEnd(true)}
                            />
                        )
                    }
                />
                <Route
                    path="/room"
                    element={
                        shouldRedirect ? (
                            <Navigate replace to="/vote" />
                        ) : (
                            <RoomPage endGame={onEndGame} />
                        )
                    }
                />
                <Route path="/join" element={<JoinPage />} />
                <Route
                    path="/lobby"
                    element={
                        <LobbyPage
                            code={'acc'}
                            players={[
                                { id: 'aa', username: 'aab', image: 'aab' },
                            ]}
                        />
                    }
                />
                <Route path="/rules" element={<RulesPage />} />
                <Route
                    path="/vote"
                    element={
                        shouldRedirectToKick ? (
                            <Navigate replace to="/kick" />
                        ) : (
                            <VotePage
                                players={[
                                    {
                                        id: 'aa',
                                        username: 'pavel',
                                        image: 'aab',
                                    },
                                    {
                                        id: 'aa',
                                        username: 'daria',
                                        image: 'aab',
                                    },
                                ]}
                                userId={'123'}
                                votes={[1, 2, 3]}
                                redirectToEnd={() => setRedirectToKick(true)}
                            />
                        )
                    }
                />
                <Route
                    path="/end"
                    element={
                        <EndGamePage
                            userTeam={0}
                            imposter="Pavel"
                            winningTeam={0}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
export default App
