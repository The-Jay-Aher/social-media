import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {
  return (
    <>
    
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <div className="loginLeftContent">
          <h3 className="brand-logo" style={{fontSize: "5rem"}}><Link to={"/"}>TECSocial.</Link></h3>
          <span className="loginDesc" style={{marginLeft: "20px"}}> Where every student has a voice!</span>
        </div>
      </div>

      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Email" className="loginInput" />
          <input placeholder="Password" className="loginInput" />
          <a href='/home'>
            <button className="loginButton">Log In</button>
          </a>
          {/* <span className="loginForgot">Forgot Password?</span> */}
          <a href='/register' className="loginRegister" data-replace="Register!"><span style={{color: "black"}}>New user?</span></a>
        </div>
      </div>
    </div>
  </div>
  </>
    ) 
}

export default Login