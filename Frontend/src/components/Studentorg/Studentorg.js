import React, { useRef } from 'react';

import '../Resources/resources.css';
import './studentorg.css';

import Navbar from '../Navbar/Navbar';
import Rightbar from '../Rightbar/Rightbar';
import Sidebar from '../Sidebar/Sidebar';

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

			<div className='resWrapper'>
				<Sidebar />
				<div className='res'>
					<div className='resHead'>Student Organisations</div>
					
					<div className='description resBox'>
						{/* <div onClick={StudentorgScript} style={{color: "black"}} className='resContent'>Entrepreneurship Cell</div>
						<img
								className='resImg' style={{marginTop: "-96px", marginRight: "-10px"}}
								src='https://res.cloudinary.com/dcprg19es/image/upload/v1680890327/Social%20Media/entrepreneurship_gklrux.jpg'
								alt='Entrepreneurship_Image'
							/>
						<p ref={moreDescriptionRef} className='more-description'>
							This organization is aimed at fostering the spirit of entrepreneurship among students. 
							It provides a platform for students to explore their business ideas, learn about 
							entrepreneurship, and interact with successful entrepreneurs. <br/>
							<button href='https://ternaengg.ac.in/entrepreneurship/' className='Sbutton'>Learn More</button>
						</p> */}
						
					</div>

				</div>
				<Rightbar />
			</div>
		</div>
	);
}

export default Studentorg;
