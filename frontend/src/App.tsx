import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Login from './components/Login'
import Register from './components/Register'
import { Lobby } from './components/Lobby'

function App() {
    return (
        <div className="App">
            <Lobby 
                code='1234'
                players={
                    [
                        {name:"name1", image:"../logo.svg"},
                        {name:"name2", image:"../logo.svg"},
                        {name:"name3", image:"../logo.svg"},
                        {name:"name4", image:"../logo.svg"},
                    ]
                }/>
        </div>
    )
}

export default App
