import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div className="formcontainer">
    <input id="signup_toggle" type="checkbox" />
    <form className="form">
        <div className="form_front">
            <div className="form_details">Login</div>
            <input type="text" className="input" placeholder="Username" />
            <input type="text" className="input" placeholder="Password" />
            <button className="btn">Login</button>
            <span className="switch">Don't have an account? 
                <label for="signup_toggle" className="signup_tog">
                <span className="m-3 text-secondary fs-6 shadow">Sign Up</span>
                </label>
            </span>
        </div>
        <div className="form_back">
            <div className="form_details">SignUp</div>
            <input type="text" className="input" placeholder="Firstname"/>
            <input type="text" className="input" placeholder="Username" />
            <input type="text" className="input" placeholder="Password" />
            <input type="text" className="input" placeholder="Confirm Password"/>
            <button className="btn">Signup</button>
            <span className="switch">Already have an account? 
                <label for="signup_toggle" className="signup_tog">
                  <span className="m-3 text-secondary fs-6 shadow">Sign In</span>
                </label>
            </span>
        </div>
    </form>
</div>
  )
}
