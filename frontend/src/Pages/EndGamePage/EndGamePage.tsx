import React from 'react'
import styles from './endgamepage.module.scss'

interface IEndGameProps {
    imposter: string
    winningTeam: number
    userTeam: number
}

export const EndGamePage: React.FC<IEndGameProps> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Game Over!</h1>
                {props.winningTeam === props.userTeam ? (
                    <h1>You Win!</h1>
                ) : (
                    <h1>You Lose!</h1>
                )}
            </div>
            <div className={styles.card}>
                <h1>The imposter was: "{props.imposter}"</h1>
            </div>
            <div className={styles.button}>
                <a href="/lobby" >
                    
                        Lobby
                    
                </a>
                <a href="/join">
                    
                        Main Menu
                    
                </a>
            </div>
        </div>
    )
}
