import React from 'react';
import {PermMedia, Label, Room} from "@mui/icons-material";

import "./share.css";

function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="https://www.svgrepo.com/show/13656/user.svg" alt="default-Img" className='shareProfile' />
                <input type="text" placeholder="What's on your mind!" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className='shareIcon'/>
                        <span className="shareText">Photo or video</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <Label className='shareIcon'/>
                        <span className="shareText">Tag Friends</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <Room className='shareIcon'/>
                        <span className="shareText">Location</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share