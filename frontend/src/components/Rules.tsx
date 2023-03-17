import React from "react";
import styles from "./login.module.scss"

const roundTimer = 2;
const debuggerLives = 3;

export function Rules() {
    return(
            <div>
                <div>
                    <h1>Rules: </h1>
                </div>
                <div>
                    <p>At the start of every game players are split into bugs and debugers</p>
                    <p>Debuggers Try to solve tasks by writing code.</p>
                    <p>Bugs on the other hand try to interfere with tasks by making them return incorrect inputs</p>
                    <p> after {roundTimer} minutes have passed, The voting phase starts ,</p>
                    <p>all players assemble and try to guess who is the bug within their code.</p>
                    <p>if there are more than a certain ammount of tasks that do not work</p>
                    <p>the debuggers lose a live. If the debuggers lose {debuggerLives} the game is over and the bugs win</p>
                    <p>If there are as many bugs as debuggers the bugs also win</p>
                    <p>If the debuggers identify all bugs and vote them out the debuggers win.</p>
                    
                </div>
                <div>
                <a href="/mainMenu" className={styles.button}>
                    <div>
                        <h1 >Main Menu</h1>
                    </div>
                </a>
                </div>
            </div>

    )

}