import React from 'react'
import styles from './rulespage.module.scss'

export const RulesPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Rules: </h1>
            </div>
            <div className={styles.card}>
                <p>
                    At the start of every game players are split into bugs and
                    debugers. Debuggers Try to solve tasks by writing code. 
                    Bugs on the other hand try to interfere with tasks by making
                    them return incorrect inputs.
                </p>
                <p>
                    after 2 minutes have passed, The voting phase
                    starts , all players assemble and try to guess who is the bug within
                    their code. If there are more than a certain ammount of tasks that do
                    not work the debuggers lose a live. 
                </p>
                <p>
                    If the debuggers lose 2 lives, the game is over and the bugs win
                    If there are as many bugs as debuggers the bugs also win 
                    If the debuggers identify all bugs and vote them out the
                    debuggers win.
                </p>
            </div>
            <a href="/join"className={styles.button}>
                <div>
                    <strong>Main Menu</strong>
                </div>
            </a>
        </div>
    )
}
