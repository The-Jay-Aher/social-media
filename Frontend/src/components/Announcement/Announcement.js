import React from 'react';

import Navbar from '../Navbar/Navbar';
import Rightbar from '../Rightbar/Rightbar';
import Sidebar from '../Sidebar/Sidebar';

import '../Resources/resources.css';
import './announcement.css';

function Announcement() {
	return (
		<div>
			<Navbar />

			<div className='resWrapper'>
				<Sidebar />

				<div className='res'>
					<div className='resHead' style={{marginLeft: '70px'}}>
						Announcements
					</div>

					<div style={{ textAlign: 'center' }}>
						<div className='announcement-container'>
							<div className='announcement-header'>
								<p>Check out the latest Updates and News.</p>
							</div>

							<div className='announcement-pin active'>
								<div className='announcement-title pinned'>
									<span className='pin-icon'>&#x1F4CC;</span>
									<h2 style={{ color: 'black'}}>Festivities Conclude!</h2>
								</div>
								<div className='announcement-date'>April 2, 2023</div>
								<div className='announcement-text'>
									The college fest ended with a huge success as students enjoyed a thrilling concert 
									by Gajendra Verma and an electrifying EDM night featuring DJ Rhea. The event brought 
									students from all over the campus together to dance and cheer, creating a memorable 
									finale to the week-long extravaganza
								</div>
								{/* <a href='#' className='announcement-btn'>
									Learn More
								</a> */}
							</div>

							<div className='announcement'>
								<div className='announcement-title'>
									<h2 style={{ color: 'black'}}>Office relocation</h2>
								</div>
								<div className='announcement-date'>March 30, 2023</div>
								<div className='announcement-text'>
									We have relocated our office to a new address. Please update your records with the
									new address: 123 Main Street, Suite 500.
								</div>
								{/* <a href='#' className='announcement-btn'>
									Learn More
								</a> */}
							</div>

							<div className='announcement'>
								<div className='announcement-title'>
									<h2 style={{ color: 'black'}}>Charity Drive</h2>
								</div>
								<div className='announcement-date'>March 20, 2023</div>
								<div className='announcement-text'>
									We are organizing a charity drive to support the local community. Please donate
									whatever you can - every little bit helps!
								</div>
								{/* <a href='#' className='announcement-btn'>
									Learn More
								</a> */}
							</div>

							<div className='announcement'>
								<div className='announcement-title'>
									<h2 style={{ color: 'black'}}>Website redesign</h2>
								</div>
								<div className='announcement-date'>March 15, 2023</div>
								<div className='announcement-text'>
									We have redesigned our website to provide a better user experience. Check it out and
									let us know what you think!
								</div>
								{/* <a href='#' className='announcement-btn'>
									Learn More
								</a> */}
							</div>
						</div>
					</div>
				</div>

				<Rightbar />
			</div>
		</div>
	);
}

export default Announcement;