import "./Login.css"
const Login = () => {
    return (
        <div className="loginPage">
            <div className="login">
                <h2>login</h2>
                <form>
                    <input type="email" id="email" name="email" placeholder="Your username or your email" />
                    <input type="password" id="password" name="password" min="8" placeholder="Your password"/>
                    <button className="signin">Sign in</button>
                </form>   
                <div className="loginfooter">
                    <span>Forgot password?</span>
                    <span>Create an account</span>
                </div>
            </div>
        </div>
           
    )
}

export default Login;