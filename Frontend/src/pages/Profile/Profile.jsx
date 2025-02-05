import axios from 'axios';
import React, { useState } from 'react';
import Feed from '../../components/Feed/Feed';
import Topbar from '../../components/Navbar/Navbar';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Profile() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/users?username=john`);
			setUser(res.data);
		};
		fetchUser();
	}, []);

	return (
		<>
			<Topbar />
			<div className='profile'>
				<Sidebar />
				<div className='profileRight'>
					<div className='profileRightTop'>
						<div className='profileCover'>
							<img className='profileCoverImg' src={`${PF}post/3.jpeg`} alt='' />
							<img className='profileUserImg' src={`${PF}person/7.jpeg`} alt='' />
						</div>
						<div className='profileInfo'>
							<h4 className='profileInfoName'>{user.username}</h4>
							<span className='profileInfoDesc'>{user.desc}</span>
						</div>
					</div>
					<div className='profileRightBottom'>
						<Feed username='john' />
						<Rightbar user={user} />
					</div>
				</div>
			</div>
		</>
	);
}
