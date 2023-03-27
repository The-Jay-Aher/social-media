import React from 'react';
import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className="navbarLeft">
        <a href="/home" className="brand-logo" >TECSocial.</a>
      </div>

      <div className="navbarCenter">
        <div className='searchbar'>
          <Search className="searchIcon"/>
          <input placeholder='Search for awesomeness' className="searchInput" />
        </div>
      </div>

      <div className="navbarRight">
        <div className="links">
          <span className="navbarLink">Home</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div>
          <div className="navbarIcon">
            <div className="iconItem"> 
              <Person />
              <span className="badge">1</span>
            </div>

            <div className="iconItem">
              <Chat />
              <span className="badge">1</span>
            </div>

            <div className="iconItem"> 
              <Notifications />
              <span className="badge">1</span>
            </div>
          </div>
        </div>
        <img src="https://www.svgrepo.com/show/13656/user.svg" alt="default-Img" className="navImg" />
      </div>
    </div>
  )
}

export default Navbar;