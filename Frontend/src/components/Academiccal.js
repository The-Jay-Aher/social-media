import React from 'react'

import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';

import './resources.css';
import './academiccal.css';

function Academiccal() {
  return (
      <div>
        <Navbar />
        
        <div className="resWrapper">
        <Sidebar />
        
        <div className='res'>
            <div className='resHead' style={{textAlign: "center"}}>
                Academic Calender
            </div>

            <div style={{padding: "20px", textAlign: "center"}}>
                
            </div>
        </div>

        <Rightbar />
      </div>
    </div>
  )
}

export default Academiccal
