import React from 'react'
import "./css/signup.css"

const Signup = () => {
  return (
    <div className="signup-form-container">
    <h1>Sign Up Form</h1>
    <input type="text" placeholder="Username" className="input-field" />
    <br /><br />
    <input type="email" placeholder="Email" className="input-field" />
    <br /><br />
    <input type="password" placeholder="Password" className="input-field" />
    <br /><br />
    <button className="signup-button" type="button">Sign Up</button>
  </div>
  )
}

export default Signup