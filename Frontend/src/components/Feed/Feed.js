import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Post from '../Post/Post';
import Share from '../Share/Share';
import './feed.css';

function Feed({ username }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			const res = username
				? await axios.get('/posts/profile/' + username)
				: await axios.get('posts/timeline/:userId');
			setPosts(res.data);
		};
		fetchPost();
	}, [username]);
	return (
		<div className='feed'>
			<div className='feedWrapper'>
				<Share />
				{/* <Post /> */}
				{posts.map((p) => (
					<Post key={p._id} post={p} />
				))}
			</div>
		</div>
	);
}

export default Feed;
