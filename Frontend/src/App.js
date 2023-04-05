import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Academiccal from './components/Academiccal/Academiccal';
import Announcement from './components/Announcement/Announcement';
import Campusevent from './components/Campusevent/Campusevent';
import Landing from './components/Landing/Landing';
import Resources from './components/Resources/Resources';
import Studentorg from './components/Studentorg/Studentorg';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				{/* <NavBar /> */}
				<Routes>
					<Route exact path='/' element={<Landing />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
					<Route exact path='/profile' element={<Profile />} />
					<Route exact path='/home' element={<Home />} />
					<Route exact path='/resources' element={<Resources />} />
					<Route exact path='/studentorg' element={<Studentorg />} />
					<Route exact path='/academiccal' element={<Academiccal />} />
					<Route exact path='/announcement' element={<Announcement />} />
					<Route exact path='/campusevent' element={<Campusevent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
