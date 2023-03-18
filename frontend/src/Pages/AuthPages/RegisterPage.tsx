import styles from './login.module.scss'

export const RegisterPage: React.FC = () => {
    return (

        <div className={styles.container}>
            <h1>Register</h1>
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
                    <button>SIGN UP</button>
                </div>
            </form>
            <div className={styles.footer}>
                <p>
                        Altready have an account?{' '}
                        <a href='/login'>SIGN IN</a>
                </p>
            </div>
        </div>
    )
}
