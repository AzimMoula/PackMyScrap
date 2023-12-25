import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error,isLoading,login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <title className="login">LOGIN</title>
                <hr />
                <label className="login-labels">Email:</label>
                <input className="login-inputs" 
                    type="email"
                    onChange={e => {setEmail(e.target.value)}}
                    value={email}
                    placeholder="example@xyz.com"
                />
                <label className="login-labels">Password:</label>
                <input className="login-inputs"
                    type="password" 
                    onChange={e => {setPassword(e.target.value)}}
                    value={password}
                    placeholder="password"
                />
                <button className="login-btn" type="submit" disabled={isLoading}>Log In</button>
                {error && <div className="error">{error}</div>}
            </form>
            <h1 className="login-greet">Welcome to PackMyScrap</h1>
        </div>
    );
}
 
export default Login;