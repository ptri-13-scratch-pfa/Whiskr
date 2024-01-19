import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TinderCard from 'react-tinder-card';
import MatchesDashboard from '../components/MatchesDashboard';

const AdopterDashboard = () => {
  //GET request to /api/adopters
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
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/adopters');
        setCharacters(response.data);
        console.log('characters:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='adopter-dashboard'>
      <div className='swiper-container'>
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
      </div>
      <MatchesDashboard className='matches-dashboard' />
    </div>
  );
};

export default AdopterDashboard;
