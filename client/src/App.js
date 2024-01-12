import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheet.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route className='signup-link' path='/' element={<Home />} />
          <Route />
          <Route path='/login' element={<Login />} />
          <Route />
          <Route path='/signup' element={<Signup />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
