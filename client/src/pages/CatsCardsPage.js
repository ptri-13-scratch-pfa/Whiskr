import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TinderCard from 'react-tinder-card';
import SideBar from '../components/SideBar.js';

const CatDashboard = () => {
  const [characters, setCharacters] = useState([]);
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = name => {
    console.log(name + ' left the screen!');
  };

  useEffect(() => {
    // Use an async function inside useEffect to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/cats');
        setCharacters(response.data);
        console.log('characters:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <div className='cards-page'>
      <div className='card-container'>
        {characters.map(character => (
          <TinderCard
            className='swipe'
            key={character.name}
            onSwipe={dir => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.imageUrl + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>

      <SideBar className='side-bar' />
    </div>
  );
};

export default CatDashboard;
