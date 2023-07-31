import React from 'react'
import "./css/login.css"

const Login = () => {
  return (
    <div className="box-2">
    <div className="login-form-container">
      <h1>Login Form</h1>
      <input type="text" placeholder="Username" className="input-field" />
      <br /><br />
      <input type="password" placeholder="Password" className="input-field" />
      <br /><br />
      <button className="login-button" type="button">Login</button>
    </div>
  </div>
  )}


export default Login