import styles from './login.module.scss'

export const LoginPage: React.FC = () => {
    return (
        <div className={styles.bacground}>
            <div className={styles.container}>
                <h1>Log in</h1>
                <form>
                    <div className={styles.card}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
                    </div>
                    <div className={styles.card}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className={styles.card}>
                        <a href="/join">
                            <div>SIGN IN</div>
                        </a>
                    </div>
                </form>
                <div className={styles.footer}>
                    <p>
                        Don't have an account? <a href="/reg">SIGN UP</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
