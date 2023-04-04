import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Landing from './components/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Resources from './components/Resources';
import Studentorg from './components/Studentorg';
import Academiccal from './components/Academiccal';
import Announcement from './components/Announcement';
import Campusevent from './components/Campusevent';

import './App.css';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/studentorg" element={<Studentorg />} />
          <Route exact path="/academiccal" element={<Academiccal />} />
          <Route exact path="/announcement" element={<Announcement />} />
          <Route exact path="/campusevent" element={<Campusevent />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
