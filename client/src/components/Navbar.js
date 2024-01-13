import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
        <Link to='/'>
          <h1>Whiskr</h1>
        </Link>
        <div className='navbar-right'>
          <h4>Safety</h4> 
          <h4>Support</h4>
          <Link to='/about'>
            <h4>About</h4>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// NOTE: Safety and Support h3 elements are just there for aesthetic