import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

const Home = () => {
  // const navigate = useNavigate();

  // setting the current googleIdToken accessed 
  // from google Oauth to be the ID Token
  const [googleIdToken, setGoogleIdToken] = useState(null);


  useEffect(() => {
    // we are sending a post request to /login passing in the ID Token
    axios.post('/login', { googleIdToken })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error, 'error in Home.js for google Oauth');
    })

    // if (user) {
    //   let credentials = {
    //     email: user, 
    //     password: 'google'
    //   }
    //   axios.post('/login/', credentials)
    //   .then(data => {
    //     if (data.profileType === 'Adopter') {
    //       navigate('/CatsCardsPage');
    //     } else if (data.profileType === 'Cat') {
    //       navigate('/AdopterCardsPage');
    //     } 
    //   }).catch(error => {
    //     console.log(error);
    //     navigate('/signup');
    //   }) 
    // }
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
            <GoogleOAuthProvider clientId="1079671404261-jp1egqad4jak3pgj3l53cemqb1inqbj9.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={credentialResponse => {
                  // This is the ID token! 
                  const idToken = credentialResponse.credential;
                  setGoogleIdToken(idToken)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
