import { MoreVert, ThumbUp } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react';
import { format } from 'timeago.js';
import './post.css';

function Post({ post }) {
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/users/${post.userId}`);
			setUser(res.data);
		};
		fetchUser();
	}, [post.userId]);

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className='post'>
			<div className='postWrapper'>
				<div className='postTop'>
					<div className='postTopLeft'>
						
						<img
							src={user.profilePicture || PF + 'person/noAvatar.png'}
							alt='default-Img'
							className='profileImg'
						/>
						<span className='profileName'>{user.username}</span>
						<span className='postDate'>{format(post.createdAt)}</span>
					</div>
					<div className='postTopRight'>
						<MoreVert />
					</div>
				</div>
				<div className='postCenter'>
					<span className='postText'>{post?.desc}</span>
					<img src={PF + post.img} alt='Default Image' className='postImg' />
				</div>
				<div className='postBottom'>
					<div className='postBottomLeft'>
						<ThumbUp className='like' onClick={likeHandler} />
						<span className='likeCounter'>{like} people liked this post</span>
					</div>
					<div className='postBottomRight'>
						<span className='commentText'>{post.comment} comment</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
