// import React from 'react';
// import { useState } from 'react';
// import TinderCard from 'react-tinder-card';
// import axios from 'axios';

// const CatDashboard = async () => {
//   // Mock data:

// //GET request to /api/adopters
//   const characters = await axios.get('/api/cats')
//   console.log('characters:', characters)

//   // const characters = [

//   //   {
//   //     name: 'Doge Cat',
//   //     url: 'https://i.imgur.com/7F5mhPp.gif',
//   //   },
//   //   {
//   //     name: 'River',
//   //     url: 'https://i.imgur.com/q350qch.jpeg',
//   //   },
//   //   {
//   //     name: 'Stretch',
//   //     url: 'https://i.imgur.com/Ovrl1BE.jpeg',
//   //   },
//   //   {
//   //     name: 'Kitty',
//   //     url: 'https://i.imgur.com/rRdeX5I.jpeg',
//   //   },
//   //   {
//   //     name: 'Echo',
//   //     url: 'https://i.imgur.com/Cmp5tNf.jpeg',
//   //   },
//   // ];

//   const [lastDirection, setLastDirection] = useState();

//   const swiped = (direction, nameToDelete) => {
//     console.log('removing: ' + nameToDelete);
//     setLastDirection(direction);
//   };

//   const outOfFrame = name => {
//     console.log(name + ' left the screen!');
//   };

//   return (
//     <div className='adopter-dashboard'>
//       <div className='swiper-container'>
//         <div className='card-container'>
//           {characters.map(character => (
//             <TinderCard
//               className='swipe'
//               key={character.name}
//               onSwipe={dir => swiped(dir, character.name)}
//               onCardLeftScreen={() => outOfFrame(character.name)}
//             >
//               <div
//                 style={{ backgroundImage: 'url(' + character.imageUrl + ')' }}
//                 className='card'
//               >
//                 <h3>{character.name}</h3>
//               </div>
//             </TinderCard>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CatDashboard;


import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import axios from 'axios';

const CatDashboard = () => {
  const [characters, setCharacters] = useState([]);
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
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
    <div className='adopter-dashboard'>
      <div className='swiper-container'>
        <div className='card-container'>
          {characters.map((character) => (
            <TinderCard
              className='swipe'
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
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
    </div>
  );
};

export default CatDashboard;
