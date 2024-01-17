import React from 'react';
// import axios from 'axios';

const MatchesDashboard = () => {
  // Mock data
  const matches = [
    { name: 'catname1', imageUrl: 'https://i.imgur.com/rRdeX5I.jpeg' },
    { name: 'peanut', imageUrl: 'https://i.imgur.com/rRdeX5I.jpeg' },
    { name: 'Lyca', imageUrl: 'https://i.imgur.com/rRdeX5I.jpeg' },
    { name: 'Hugh', imageUrl: 'https://i.imgur.com/rRdeX5I.jpeg' },
  ];

  return (
    <div className='matches-dashboard'>
      <div className='matches-tab'>
        <h1>Matches</h1>
        {matches.map(match => (
          <>
            <p>{match.name}</p>
            <img src={match.imageUrl}></img>
          </>
        ))}
      </div>
      <div className='messages-tab'>
        <h1>Messages</h1>
      </div>
    </div>
  );
};

export default MatchesDashboard;
