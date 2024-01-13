import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheet.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateAccountAdopter from './pages/CreateAccountAdopter';
import CreateAccountCat from './pages/CreateAccountCat';
import About from './pages/About';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
        <Routes>
          <Route className='signup-link' path='/' element={<Home />} />
          <Route />
          <Route path='/login' element={<Login />} />
          <Route />
          <Route path='/about' element={<About />} />
          <Route />
          <Route path='/signup' element={<Signup />} />
          <Route />
          <Route path='/createAccountAdopter' element={<CreateAccountAdopter />} />
          <Route />
          <Route path='/createAccountCat' element={<CreateAccountCat />} />
          <Route />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
