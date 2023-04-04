import React from 'react'


import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';

import './resources.css';
import './announcement.css'

function Announcement() {

  return (
    <div>
      <Navbar />
        
        <div className="resWrapper">
        <Sidebar />
        
        <div className='res'>
            <div className='resHead' style={{textAlign: "center"}}>
                Announcements
            </div>

            <div style={{textAlign: "center"}}>
                <div className="announcement-container">
                    <div className="announcement-header">
                        <p>Check out the latest Updates and News.</p>
                    </div>

                    <div className="announcement active">
                        <div className="announcement-title pinned">
                            <span className="pin-icon">&#x1F4CC;</span>
                            <h2>New product launch</h2>
                        </div>
                        <div className="announcement-date">April 1, 2023</div>
                        <div className="announcement-text">
                            We are excited to announce the launch of our latest product - the SmartWatch 3000! It comes with all the features you love plus some new ones that will blow your mind. Order now and get a special launch discount!
                        </div>
                        <a href="#" className="announcement-btn">Learn More</a>
                    </div>

                    <div className="announcement">
                        <div className="announcement-title">
                            <h2>Office relocation</h2>
                        </div>
                        <div className="announcement-date">March 30, 2023</div>
                        <div className="announcement-text">
                            We have relocated our office to a new address. Please update your records with the new address: 123 Main Street, Suite 500.
                        </div>
                        <a href="#" className="announcement-btn">Learn More</a>
                    </div>
        
                    <div className="announcement">
                        <div className="announcement-title">
                            <h2>Charity Drive</h2>
                        </div>
                        <div className="announcement-date">March 20, 2023</div>
                        <div className="announcement-text">
                            We are organizing a charity drive to support the local community. Please donate whatever you can - every little bit helps!
                        </div>
                        <a href="#" className="announcement-btn">Learn More</a>
                    </div>
                    
                    <div className="announcement">
                        <div className="announcement-title">
                            <h2>Website redesign</h2>
                        </div>
                        <div className="announcement-date">March 15, 2023</div>
                        <div className="announcement-text">
                            We have redesigned our website to provide a better user experience. Check it out and let us know what you think!
                        </div>
                        <a href="#" className="announcement-btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>

        <Rightbar />
    </div>
    </div>
  )
}

export default Announcement
