import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h1>Whiskr</h1>
        </Link>
        <nav>
          <div className='signup-login'>
            <div className='signupButton'>
              <Link to='/signup'>
                <Button variant='contained'>Sign up</Button>
              </Link>
            </div>

            <div className='loginButton'>
              <Link to='/login'>
                <Button variant='contained'>Log in</Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
