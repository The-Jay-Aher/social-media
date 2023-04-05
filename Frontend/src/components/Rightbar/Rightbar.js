import React from 'react';

import './rightbar.css';

function Rightbar({user}) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	return (
		<div className='rightbar'>
			<div className='rightbarWrapper'>
				{/* {profile ? <ProfileRightbar /> : <HomeRightbar />} */}
				<div className='birthdayCont'>
					<img
						className='birthdayImg'
						src='https://res.cloudinary.com/dcprg19es/image/upload/v1667073894/Social%20Media/Default_TECS_Img_eyaq3j.png'
					/>
					<span className='birthdayTxt'>
						<b>Demo1</b> and <b>3 other friends</b> have their birthday today.
					</span>
				</div>
				<img
					className='rightbar2'
					src='https://res.cloudinary.com/dcprg19es/image/upload/v1667073894/Social%20Media/Default_TECS_Img_eyaq3j.png'
				/>
				<h4 className='rightbar3'>Online Friends</h4>
				<ul className='rightbarFriendList'>
					<li className='rightbarFriend'>
						<div className='rightbarProfileImgCont'>
							<img className='rightbarProfileImg' src='https://www.svgrepo.com/show/13656/user.svg' />
							<span className='rightbarOnline'></span>
						</div>
						<span className='rightbarUsername'>Demo 1</span>
					</li>

					<li className='rightbarFriend'>
						<div className='rightbarProfileImgCont'>
							<img className='rightbarProfileImg' src='https://www.svgrepo.com/show/13656/user.svg' />
							<span className='rightbarOnline'></span>
						</div>
						<span className='rightbarUsername'>Demo 2</span>
					</li>

					<li className='rightbarFriend'>
						<div className='rightbarProfileImgCont'>
							<img className='rightbarProfileImg' src='https://www.svgrepo.com/show/13656/user.svg' />
							<span className='rightbarOnline'></span>
						</div>
						<span className='rightbarUsername'>Demo 3</span>
					</li>

					<li className='rightbarFriend'>
						<div className='rightbarProfileImgCont'>
							<img className='rightbarProfileImg' src='https://www.svgrepo.com/show/13656/user.svg' />
							<span className='rightbarOnline'></span>
						</div>
						<span className='rightbarUsername'>Demo 4</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Rightbar;
