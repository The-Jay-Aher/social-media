import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

function Register() {
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
          <input placeholder="Username" className="loginInput" />
          <input placeholder="Email" className="loginInput" />
          <input placeholder="Password" className="loginInput1" />
          <input placeholder="Password Again" className="loginInput2" />
          <button className="regButton"><Link to={"/home"}>Sign Up</Link></button>
          <a href='/login' className="loginRegister" data-replace="Login now!"><span style={{color: "black"}}>Registered?</span></a>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Register 