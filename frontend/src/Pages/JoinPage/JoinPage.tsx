import styles from './joinpage.module.scss'

export const JoinPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <label>Enter code: </label>
            </div>
            <div className={styles.card}>
                <input type="text" name="joinCode" />
            </div>

            <div className={styles.card}>
                <button>Join with code</button>
                <label htmlFor="joinRandom"></label>
                <a href="/lobby">
                    <div className={styles.button}>Join Random</div>
                </a>
            </div>
            <a href={'/lobby'} className={styles.button}>
                <div>Lobby</div>
            </a>
        </div>
    )
}
