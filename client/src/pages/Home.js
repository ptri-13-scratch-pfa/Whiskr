import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <>
      <div className='signup-login-container'>
        <div className='signup-button'>
          <Link to='/signup'>
            <Button variant='contained'>Sign up</Button>
          </Link>
        </div>

        <div className='login-button'>
          <Link to='/login'>
            <Button variant='contained'>Log in</Button>
          </Link>
        </div>
      </div>
      <h3>About</h3>
    </>
  );
};

export default Home;
