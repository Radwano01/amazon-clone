import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../../firebase"
import { useAuth } from '../../context/GlobalState'
import { useNavigate } from 'react-router-dom' 

const Login = () => {
    const {user} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const signIn = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((auth)=> {
            if(auth){
                navigate("/")
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    const register =(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth)=> {
            if(auth)
            {navigate("/")}
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    console.log(user)
  return (
    <div className='login'>
        <Link to="/">
            <h3 className='header-logo'>AMAZON</h3>
        </Link>
        <div className="login-container">
            <h1>Sign in</h1>
            <form action="">
                <h5>Email</h5>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type='submit' className='login-signInBtn' onClick={signIn}>Sign in</button>
                <p>By conrinuing, you agree to Amazon's Fake Clone Conditions
                     of use and Privace Notice</p>
                <button className='login-registerBtn' onClick={register}>
                    Create your Amazon Account
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login