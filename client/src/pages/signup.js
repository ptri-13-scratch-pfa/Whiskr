import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileType, setProfileType] = useState('')
  const [adopterColor, setAdopterColor] = useState(true);
  const [catColor, setCatColor] = useState(true);

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(email, password, profileType);
  };

  const handleClickAdopter = async e => {
    e.preventDefault();
    setProfileType('adopter')
    setAdopterColor(false);
    setCatColor(true);
  };

  const handleClickCat = async e => {
    e.preventDefault();
    setProfileType('cat')
    setCatColor(false);
    setAdopterColor(true);
  };

  const getCreateAccountRoute = () => {
    if(email !== '' && password.length > 8){
      return (profileType==='cat') ? '/createAccountCat' : '/createAccountAdopter';
    }
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
          onClick={handleClickCat}
          color={catColor ? 'primary' : 'secondary'}
        >
          I want to put a cat up for adoption!
        </Button>
      </div>
      <Link to={getCreateAccountRoute()}>
        <button>Create Account</button>
      </Link>
    </form>
  );
};

export default Signup;
