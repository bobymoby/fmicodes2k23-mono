import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { EndGame } from './components/EndGame'
import { Lobby } from './components/Lobby'
import Room from './components/Room'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/* <EndGame imposter="gay" winningTeam={0} userTeam={0}/> */}
        {/* <Lobby 
                code='1234'
                players={
                    [
                        {name:"name1", image:""},
                        {name:"name2", image:""},
                        {name:"name3", image:""},
                        {name:"name4", image:""}
                    ]
                }/> */}
        <Room tasks={[
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:2},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:0},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:0},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:0},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:2},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:2},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:2},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:2},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:0},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:0},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:0},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:2},
            {name:"task2",task:"tasktasktasktasktasktask tasktasktasktasktasktask", userId:2},
        ]}/>
    </React.StrictMode>,

)
