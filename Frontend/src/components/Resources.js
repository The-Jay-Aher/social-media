import React from 'react'

import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';

import './resources.css';

function Resources() {
  return (
    <div>
        <Navbar />
        
        <div className="resWrapper">
        <Sidebar />
        
        <div className='res'>
            <div className='resHead' style={{textAlign: "center"}}>
                Spread the knowledge
            </div>

            <div style={{padding: "20px", textAlign: "center"}}>
                <form action="" method="post" encType="multipart/form-data" className='uploadContainer'>
                    <label htmlFor="pdf-file" style={{paddingRight: "30px", marginLeft: "40px", color: "black"}}>Select a PDF file:</label>
                    <input type="file" id="pdf-file" name="pdf-file" accept=".pdf" /><br/>
                    <input className='uploadButton' type="submit" value="Upload" /></form>
            </div>
        </div>

        <Rightbar />
      </div>
    </div>
  )
}

export default Resources
