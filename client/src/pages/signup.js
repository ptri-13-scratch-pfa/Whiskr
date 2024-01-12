import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adopter, setAdopter] = useState(false);
  const [guardian, setGuardian] = useState(false);
  const [adopterColor, setAdopterColor] = useState(false);
  const [guardianColor, setGuardianColor] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(email, password);
  };

  const handleClickAdopter = async e => {
    e.preventDefault();
    setAdopter(true);
    setGuardian(false);
    setGuardianColor(guardianColor);
    setAdopterColor(!adopterColor);
  };

  const handleClickGuardian = async e => {
    e.preventDefault();
    setGuardian(true);
    setAdopter(false);
    setGuardianColor(!guardianColor);
    setAdopterColor(adopterColor);
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
          Adopter
        </Button>
        <Button
          variant='contained'
          onClick={handleClickGuardian}
          color={guardianColor ? 'primary' : 'secondary'}
        >
          Guardian
        </Button>
      </div>
      <button>Create Account</button>
    </form>
  );
};

export default Signup;
