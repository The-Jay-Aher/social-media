import React from 'react';
// import ReactDOM from 'react-dom';
import { Forum, PeopleAlt, AutoStories, Work, EventNote, Newspaper, Campaign, CalendarMonth} from "@mui/icons-material";


import './sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Campaign className="sidebarIcon" />
            <span className='sidebarText'>Announcements</span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonth className="sidebarIcon" />
            <span className='sidebarText'>Academic Calendar</span>
          </li>
          <li className="sidebarListItem">
            <Forum className="sidebarIcon" />
            <span className='sidebarText'>Forums</span>
          </li>
          <li className="sidebarListItem">
            <AutoStories className="sidebarIcon" />
            <Link to={"/resources"}>
              <span className='sidebarText'>Resources</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <PeopleAlt className="sidebarIcon" />
            <span className='sidebarText'>Student organizations</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className='sidebarText'>Job and internship</span>
          </li>
          <li className="sidebarListItem">
            <EventNote className="sidebarIcon" />
            <span className='sidebarText'>Campus Events</span>
          </li>
          <li className="sidebarListItem">
            <Newspaper className="sidebarIcon" />
            <span className='sidebarText'>Campus News</span>
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
