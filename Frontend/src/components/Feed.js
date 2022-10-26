import React from 'react';
import ReactDOM from 'react-dom';

import './feed.css';
import Share from './Share';

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
      </div>
    </div>
  )
}

export default Feed;