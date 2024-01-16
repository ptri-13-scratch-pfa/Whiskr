import React from 'react';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from 'axios';

const AdopterDashboard = async () => {
//GET request to /api/cats
  const characters = axios.get('/api/cats')
// Mock data:
  // const characters = [
  //   {
  //     name: 'Doge Cat',
  //     url: 'https://i.imgur.com/7F5mhPp.gif',
  //   },
  //   {
  //     name: 'River',
  //     url: 'https://i.imgur.com/q350qch.jpeg',
  //   },
  //   {
  //     name: 'Stretch',
  //     url: 'https://i.imgur.com/Ovrl1BE.jpeg',
  //   },
  //   {
  //     name: 'Kitty',
  //     url: 'https://i.imgur.com/rRdeX5I.jpeg',
  //   },
  //   {
  //     name: 'Echo',
  //     url: 'https://i.imgur.com/Cmp5tNf.jpeg',
  //   },
  // ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = name => {
    console.log(name + ' left the screen!');
  };

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
                style={{ backgroundImage: 'url(' + character.url + ')' }}
                className='card'
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdopterDashboard;
