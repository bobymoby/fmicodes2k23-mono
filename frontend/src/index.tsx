import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { EndGame } from './components/EndGame'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <EndGame imposter="gay" winningTeam={0} userTeam={0}/>
    </React.StrictMode>,

)
