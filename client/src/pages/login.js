import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // NOTE: JS library used to make HTTP requests from a browser; used here to fetch data (pins) from Atlas db

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    //check that the email and password are in the database under a user record
    const userCredentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      profileType: 'Adopter',
    };

    // Make GET request to Atlas DB to add new user
    try {
      const user = await axios.post('/login', userCredentials);
      //   console.log('userToFind: ', userCredentials);
      //   console.log('user found in database: ', user);

      if (user) {
        // Redirect based on profileType
        if (user.profileType === 'Adopter') {
          navigate('/AdopterCardsPage'); // redirect to '/AdopterCardsPage' page
        } else if (user.profileType === 'Cat') {
          navigate('/CatCardsPage'); // redirect to '/CatCardsPage' page
        }
      } else {
        alert('Email or Password is not correct!');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label>Email:</label>
      <input type='email' ref={emailRef} />
      <label>Password:</label>
      <input type='password' ref={passwordRef} />
      <button>Log in</button>
    </form>
  );
};

export default Login;
