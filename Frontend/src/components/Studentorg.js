import React, { useRef  } from 'react';

import './studentorg.css'
import './resources.css'

import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';


function Studentorg() {
  const moreDescriptionRef = useRef(null);
  function StudentorgScript() {
    if (moreDescriptionRef.current.style.display === 'none') {
      moreDescriptionRef.current.style.display = 'block';
    } else {
      moreDescriptionRef.current.style.display = 'none';
    }
  }

  return (
    <div>
      <Navbar />
        
        <div className="resWrapper">
          <Sidebar />
            <div className='res'>
              <div className='resHead'>
                Student Organisations
              </div>
              <div className="description">
                <p onClick={StudentorgScript}>Short description</p>
                <p ref={moreDescriptionRef} className="more-description">Long description that is initially hidden</p>
              </div>
          </div>

          <Rightbar />
        </div>
    </div>
  )
  
}

export default Studentorg;