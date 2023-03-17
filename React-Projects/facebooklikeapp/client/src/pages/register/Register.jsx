import React from 'react'
import './register.css'
export default function Register() {
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
                    <input type="text" placeholder='User Name' className="loginInput" /> 
                    <input type="Email" placeholder='Email' className="loginInput" />        
                    <input type="password" placeholder='password' className="loginInput" />
                    <input type="password" placeholder='Confirm password' className="loginInput" />
                    <button className="loginButton">Sign up</button>
                    
                    <button className="loginRegisterButton">Log into your Account</button>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}
