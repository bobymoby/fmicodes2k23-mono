import React from "react";
import Register from "./Register";
import styles from "./login.module.scss"
import { render } from 'react-dom';

function handleSignIn(){
    console.log("clicked")
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
            <div className={styles.footer}>
                <p>Don't have an account? <button onClick={handleSignIn}>SIGN UP</button></p>
            </div>
        </div>
    )
}