import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // NOTE: JS library used to make HTTP requests from a browser; used here to fetch data (pins) from Atlas db

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const profileTypeRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      profileType: profileTypeRef.current.value,
    };

    // Make POST request to Atlas DB to add new user
    try {
      await axios.post('/signup', newUser);
    } catch (err) {
      console.log(err);
    }

    console.log('New user created: ', newUser);

    // Redirect based on profileType
    if (newUser.profileType === 'Adopter') {
      navigate('/createAccountAdopter'); // redirect to '/createAccountAdopter' page
    } else if (newUser.profileType === 'Cat') {
      navigate('/createAccountCat'); // redirect to '/createAccountCat' page
    }
  };

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <input type='email' placeholder='email' ref={emailRef} />
      <input type='password' placeholder='password' ref={passwordRef} />
      <select ref={profileTypeRef}>
        <option value='Adopter'>Adopt a cat</option>
        <option value='Cat'>Put a cat up for adoption</option>
      </select>
      <button>Register</button>
    </form>
  );
};

export default Signup;
