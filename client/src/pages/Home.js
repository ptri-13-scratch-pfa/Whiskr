import React from 'react';
import { Link } from 'react-router-dom';
//import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';

const Home = () => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  return (
    <>
      <div className='slogan-signup-login-container'>
        <h1>Find the purrfect companion®</h1>

        <div className='signup-login-buttons'>
          <div>
            <Link to='/signup'>
              <button variant='contained'>Sign up</button>
            </Link>
          </div>
          <div>
            <Link to='/login'>
              <button variant='contained'>Log in</button>
            </Link>
          </div>
          <div className="googleOauthButton">
              <button onClick={() => login()}>Sign in with Google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
