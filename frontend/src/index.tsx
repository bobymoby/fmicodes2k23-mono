import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { EndGame } from './components/EndGame'
import { Lobby } from './components/Lobby'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/* <EndGame imposter="gay" winningTeam={0} userTeam={0}/> */}
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
    </React.StrictMode>,

)
