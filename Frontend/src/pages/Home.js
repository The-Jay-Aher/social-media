import React from 'react'
import Feed from '../components/feed'
import Navbar from '../components/Navbar'
import Rightbar from '../components/rightbar'
import Sidebar from '../components/sidebar'

function Home() {
  return (
    <>
      <Navbar />

      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home