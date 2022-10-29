import React from 'react';
import "./post.css";
import {MoreVert, ThumbUp} from "@mui/icons-material";

function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="https://www.svgrepo.com/show/13656/user.svg" alt="default-Img" className="profileImg" />
                    <span className="profileName">Demo</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Default Text</span>
                <img src="https://res.cloudinary.com/dcprg19es/image/upload/v1667073894/Social%20Media/Default_TECS_Img_eyaq3j.png" alt="Default Image" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp className='like'/>
                    <span className="likeCounter">00 people liked this post</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentText">00 comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
