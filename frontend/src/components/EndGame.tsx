import React from "react";
import styles from "./endgame.module.scss"

interface IEndGameProps{
    imposter: string;
    winningTeam: number;
    userTeam: number;
}

export function EndGame(props:IEndGameProps) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Game Over!</h1>
                {
                (props.winningTeam == props.userTeam)?
                    <h1>You Win!</h1> :
                    <h1>You Lose!</h1>
                    
                }
            </div>
            <div className={styles.card}>
                <h1>The imposter was: "{props.imposter}"</h1>
            </div>
            <div>
                <a href="/lobby" className={styles.button}>
                    <div>
                        <h1>Lobby</h1>
                    </div>
                </a>
                <a href="/mainMenu" className={styles.button}>
                    <div>
                        <h1 >Main Menu</h1>
                    </div>
                </a>
            </div>

        </div>
    )
}