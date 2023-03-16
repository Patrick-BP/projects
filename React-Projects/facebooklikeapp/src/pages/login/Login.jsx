import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social Media</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Social media.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                     <input type="Email" placeholder='Email' className="loginInput" />
                    <input type="password" placeholder='password' className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot password</span>
                    <button className="loginRegisterButton">Create a new Account</button>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}
