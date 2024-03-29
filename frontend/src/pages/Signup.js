import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup,error,isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                onChange={e => {setEmail(e.target.value)}}
                value={email}
                placeholder="example@xyz.com"
            />
            <input
                type="password" 
                onChange={e => {setPassword(e.target.value)}}
                value={password}
                placeholder="password"
            />
            <button type="submit" disabled={isLoading}>Sign Up</button>
            {error && (<div className="error">{error}</div>)}
        </form>
    );
}
 
export default Signup;