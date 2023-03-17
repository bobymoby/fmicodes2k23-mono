import React from "react";
import Register from "./Register";
import styles from "./login.module.scss"

function handleSignIn(){
    <Register/>
}

export default function Login(){
    return (
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
            <div>
                <p>Don't have an account? </p>
            </div>
        </div>
    )
}