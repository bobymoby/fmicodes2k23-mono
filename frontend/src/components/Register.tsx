

export default function Register(){
    console.log("ds")
    return(
        <div className="login">
            <form>
                <div className="login-box">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </div>
                <div className="login-box">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"/>
                </div>
                <div className="login-box">
                    <label htmlFor="conf-assword">Confirm Password</label>
                    <input type="password" name="conf-assword"/>
                </div>
                <div className="login-box">
                    <button>SIGN UP</button>
                </div>
            </form>
            <div>
                <p>Already have an account? <a>SIGN IN</a></p>
            </div>
        </div>
    )
}