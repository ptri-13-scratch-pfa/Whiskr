import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, LinearProgress } from '@mui/material';
// import axios from 'axios'; // NOTE: JS library used to make HTTP requests from a browser; used here to fetch data (pins) from Atlas db
import axios from 'axios';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountAdopter = () => {
  const nameRef = useRef();
  const aboutMeRef = useRef();
  // const imageUrl = useRef();
  const professionRef = useRef();
  const experienceRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const newAdopter = {
      name: nameRef.current.value,
      aboutMe: aboutMeRef.current.value,
      // profilePic: profilePicRef.current.value,
      imageUrl: 'https://i.imgur.com/7F5mhPp.gif',
      profession: professionRef.current.value,
      experience: experienceRef.current.value
    };
    console.log(newAdopter);
    try {
      const adopterResponse = await axios.post('/signup/adopter', newAdopter);
      if(adopterResponse){
        navigate('/CatsCardsPage')
      }
    } catch(err) {
      console.log(err);
    }
  };


  const [file, setFile] = useState()

  function handleChange(event) {
    console.log('upload event change:')
    setFile(event.target.files[0])
    console.log('event.target.files:', event.target.files)
  }

  const axiosErr = (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('error in response...')
      console.log('data', error.response.data);
      console.log('status', error.response.status);
      console.log('headers', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log('error in request')
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error message:', error.message);
    }
    console.log(error.config);
  }

  const handleFileUpload = async (event) => {
    event.preventDefault();
    console.log('handlefileupload activated')
    // const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': 'Bearer 68b2fb34065d82a82a822fa697d18c3caf05ac83'
      },
    };
    try {
      const upload = await axios.post('https://api.imgur.com/3/image', formData, config)
      console.log('upload: ', upload)
    } catch (err) {
      axiosErr(err)
      }
    }


    // const [uploadProgress, setUploadProgress] = React.useState(0);

  return (
    <>
    <div>
      <form onSubmit={handleFileUpload}>
          <label>Upload Photos</label>
          <input type="file" onChange={handleChange}/>
          <button type='submit'>Upload</button>
        </form>
    </div>
    <div>
      <h3>Create your adopter profile!</h3>
      <form className='signup' onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' placeholder='full name' ref={nameRef} />
        <label>About Me: </label>
        <input type='about me' placeholder='about me' ref={aboutMeRef} />
        {/* <label>Add images here: </label>
        <input type='file' placeholder='image url' ref={profilePicRef} /> */}

        <label>Profession: </label>
        <input type='profession' placeholder='profession' ref={professionRef} />
        <label>Experience w/ Cats: </label>
        <select name='age' id='age' ref={experienceRef}>
          <option value='1'>0-6 months</option>
          <option value='2'>1-2 Years</option>
          <option value='3'>2-5 Years</option>
          <option value='4'>5+ Years</option>
        </select>
        {/* <Link to='/AdopterCardsPage'> */}
        <button>Create Profile</button>
        {/* </Link> */}
      </form>
    </div>

    </>
  );
};

export default CreateAccountAdopter;

// //How would you describe your cat experience?
// If applicable, please list any pets that currently live in your home:
// What age range are you looking to adopt? (check all that apply)

// A kitten under 6 months

// An adolescent cat, 6 months to about a year

// Adult [1 year to 8 years old]

// Senior [8 years old and up]
// What type of cat do you think would most enjoy your household? (check all that apply)

// A confident, out-going cat who enjoys a lot of household activity

// A shy cat who enjoys a quiet environment

// A cat who enjoys living with a cat(s)

// A cat who enjoys living with a dog(s)

// A cat who might enjoy being around children
// What type of cat best matches what you are looking for? (check all that apply)

// A cat who is active and I can play with a few times a day

// A more independent cat who will do their own thing

// A cat who enjoys lying next to me on the couch and being petted

// A shy cat who may require some patience on my part to help them become comfortable in my home

// A cat who has been at the shelter for a longer time than most
// There are many tips we can offer to help you become a happy cat owner. What would you be interested in learning more about?

// The first two weeks: How to set my cat up for success

// How to play with my cat

// How to keep my cat from play biting or scratching me

// How to introduce a new cat to my current cat(s)

// Scratching furniture

// Using the litterbox

// What and how often to feed my cat

// Grooming Instructions
// What else is important for us to know about you and/or the type of cat you’re looking for? (Required)
// What drew you to this specific cat? (Required)
// To help us make the best match possible, please let us know who else lives in your home and your relation to them? If applicable, please include age of children in your home* (Required)
// How did you hear about the ASPCA?
// Many pets at the ASPCA Adoption Center have medical and/or behavioral needs and require a certain type of home, which is detailed in the pet’s bio. If you have not yet read this pet’s bio, please hit the back button and read the bio before continuing.

// I acknowledge I have read this pet’s bio.
