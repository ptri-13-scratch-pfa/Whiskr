import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <>
      <div className='slogan-signup-login-container'>
        <div>
          <h1 style={{ fontSize: 80 }}>Find the purrfect companion®</h1>
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
        </div>
      </div>
    </>
  );
};

export default Home;
