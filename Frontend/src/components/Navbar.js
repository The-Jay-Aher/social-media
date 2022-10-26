import React from 'react';
import "./navbar.css";
import { Search, Person } from "@mui/icons-material";

function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className="navbarLeft">
        <a href="#" className="brand-logo" >TECSocial.</a>
      </div>

      <div className="navbarCenter">
        <div className='searchbar'>
          <Search />
          {/* <span className="material-symbols-outlined">search</span> */}
          <input placeholder='Search for awesomeness' className="searchInput" />
        </div>
      </div>

      <div className="navbarRight">
        <div className="links">
          <span className="link">Home</span>
          <span className="link">Timeline</span>
        </div>
        <div className="icon">
          <div className="iconItem">
            <div>
              <span className="material-symbols-outlined">person</span>
              <span className="badge">1</span>
            </div>

            <div>
              <span className="material-symbols-outlined">chat</span>
              <span className="badge">1</span>
            </div>

            <div>
              <span className="material-symbols-outlined">notifications</span>
              <span className="badge">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;