import React from 'react';

import Navbar from '../Navbar/Navbar';
import Rightbar from '../Rightbar/Rightbar';
import Sidebar from '../Sidebar/Sidebar';

import '../Resources/resources.css';

function Campusevent() {
	return (
		<div>
			<Navbar />

			<div className='resWrapper'>
				<Sidebar />

				<div className='res'>
					<div className='resHead' style={{ textAlign: 'center' }}>
						Campus Events
					</div>

					<div style={{ padding: '20px', textAlign: 'center' }}></div>
				</div>

				<Rightbar />
			</div>
		</div>
	);
}

export default Campusevent;
