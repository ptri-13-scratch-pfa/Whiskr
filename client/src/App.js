import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheet.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Signup from './pages/signup';
import CreateAccountAdopter from './pages/CreateAccountAdopter';
import CreateAccountCat from './pages/CreateAccountCat';
import About from './pages/About';
import AdopterCardsPage from './pages/AdopterCardsPage';
import CatCardsPage from './pages/CatsCardsPage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route className='signup-link' path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
            <Route
              path='/createAccountAdopter'
              element={<CreateAccountAdopter />}
            />
            <Route path='/createAccountCat' element={<CreateAccountCat />} />
            <Route path='/AdopterCardsPage' element={<AdopterCardsPage />} />
            <Route path='/CatsCardsPage' element={<CatCardsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
