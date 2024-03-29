import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import './signup.css'
import { Navbar } from "../admin_components/Navbar"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <>
        <div>
            <Navbar/>
        </div>
        <form className="signup" onSubmit={handleSubmit}>
            <h3> Sign Up </h3>

            <label> Email: </label>
            <input 
                type="email" 
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
            />
            <label> Password: </label>
            <input 
                type="password" 
                onChange = {(e) => setPassword(e.target.value)}
                value = {password}
            />

            <button className="admin_signup" disabled={isLoading}> Sign Up </button>
            {error && <div className="error"> {error} </div>}
        </form>
        </>
    )
}

export default Signup;