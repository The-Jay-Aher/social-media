import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
import "./Login.css";

function Login() {
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <div className="loginLeftContent">
          <h3 className="brand-logo" style={{fontSize: "5rem"}}>TECSocial.</h3>
          <span className="loginDesc" style={{marginLeft: "20px"}}> Where every student has a voice!</span>
        </div>
      </div>

      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Email" className="loginInput" />
          <input placeholder="Password" className="loginInput" />
          <button className="loginButton">Log In</button>
          {/* <span className="loginForgot">Forgot Password?</span> */}
          <a className="loginRegister" data-replace="Register!"><span style={{color: "black"}}><Link to="/register">New user?</Link></span></a>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Login