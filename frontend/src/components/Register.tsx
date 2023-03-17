import styles from "./login.module.scss"


export default function Register(){
    console.log("ds")
    return(
        <div className={styles.container}>
            <form>
                <div className={styles.card}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </div>
                <div className={styles.card}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"/>
                </div>
                <div className={styles.card}>
                    <button>SIGN IN</button>
                </div>
            </form>
            <div className={styles.footer}>
                {/* <p>Don't have an account? <button onClick={handleSignIn}>SIGN UP</button></p> */}
            </div>
        </div>
    )
}