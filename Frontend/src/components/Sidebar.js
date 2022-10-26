import React from 'react';
import ReactDOM from 'react-dom';
import { Feed, Chat, PeopleAlt, Bookmarks, Work, EventNote, Newspaper} from "@mui/icons-material";

import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Feed className="sidebarIcon" />
            <span className='sidebarText'>Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className='sidebarText'>Chat</span>
          </li>
          <li className="sidebarListItem">
            <PeopleAlt className="sidebarIcon" />
            <span className='sidebarText'>Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon" />
            <span className='sidebarText'>Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className='sidebarText'>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventNote className="sidebarIcon" />
            <span className='sidebarText'>Event</span>
          </li>
          <li className="sidebarListItem">
            <Newspaper className="sidebarIcon" />
            <span className='sidebarText'>News</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr  className='sidebarHr'/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="https://www.svgrepo.com/show/13656/user.svg" alt="default-Img" className="sidebarImg" />
            <span className="sidebarName">Demo 1</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://www.svgrepo.com/show/13656/user.svg" alt="default-Img" className="sidebarImg" />
            <span className="sidebarName">Demo 2</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://www.svgrepo.com/show/13656/user.svg" alt="default-Img" className="sidebarImg" />
            <span className="sidebarName">Demo 3</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://www.svgrepo.com/show/13656/user.svg" alt="default-Img" className="sidebarImg" />
            <span className="sidebarName">Demo 4</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://www.svgrepo.com/show/13656/user.svg" alt="default-Img" className="sidebarImg" />
            <span className="sidebarName">Demo 5</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
