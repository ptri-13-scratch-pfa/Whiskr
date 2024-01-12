import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adopter, setAdopter] = useState(false);
  const [guardian, setGuardian] = useState(false);
  const [adopterColor, setAdopterColor] = useState(true);
  const [guardianColor, setGuardianColor] = useState(true);

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(email, password, adopter, guardian);
  };

  const handleClickAdopter = async e => {
    e.preventDefault();
    setAdopter(true);
    setGuardian(false);
    setAdopterColor(false);
    setGuardianColor(true);
    console.log('guardian',guardian,'adopter',adopter)
  };

  const handleClickGuardian = async e => {
    e.preventDefault();
    setGuardian(true);
    setAdopter(false);
    setGuardianColor(false);
    setAdopterColor(true);
    console.log('guardian',guardian,'adopter',adopter)
  };

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Email:</label>
      <input
        type='email'
        onChange={e => {
          setEmail(e.target.value);
        }}
        value={email}
      ></input>
      <label>Password:</label>
      <input
        type='password'
        onChange={e => {
          setPassword(e.target.value);
        }}
        value={password}
      ></input>
      <div>
        <Button
          variant='contained'
          onClick={handleClickAdopter}
          color={adopterColor ? 'primary' : 'secondary'}
        >
          I'm Looking to Adopt a Cat!
        </Button>
        <Button
          variant='contained'
          onClick={handleClickGuardian}
          color={guardianColor ? 'primary' : 'secondary'}
        >
          I want to put a cat up for adoption!
        </Button>
      </div>
      <button>Create Account</button>
    </form>
  );
};

export default Signup;
