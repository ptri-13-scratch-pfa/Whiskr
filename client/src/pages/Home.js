import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const Home = ({handleGoogleUser}) => {
  const navigate = useNavigate();

  // setting the current googleIdToken accessed 
  // from google Oauth to be the ID Token
  const [googleIdToken, setGoogleIdToken] = useState(null);

  useEffect(() => {
    // we are sending a post request to /login passing in the ID Token
    axios.post('/login', { googleIdToken })
    .then(response => {
      console.log(response.data, 'response in home.js')
      handleGoogleUser(response.data);
      const { hasAdopterOrCatProfile, profileType } = response.data;
      if (profileType === undefined) {
        navigate('/signup');
      } else if (profileType === 'Cat' && hasAdopterOrCatProfile === false) {
        navigate('/create-account-cat');
      } else if (profileType === 'Cat' && hasAdopterOrCatProfile === true) {
        navigate('/CatsCardsPage')
      } else if (profileType === 'Adopter' && hasAdopterOrCatProfile === false) {
      navigate('/createAccountAdopter');
      } else if (profileType === 'Adopter' && hasAdopterOrCatProfile === true) {
        navigate('/AdopterCardsPage')
      }
    })
    .catch(error => {
      console.error(error, 'error in Home.js for google Oauth');
      // navigate('/signup');
    })
  }, [googleIdToken])

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
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const idToken = credentialResponse.credential;
                  setGoogleIdToken(idToken)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
