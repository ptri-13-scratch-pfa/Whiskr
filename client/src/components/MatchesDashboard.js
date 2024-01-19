import React, { useState } from 'react';
// import axios from 'axios';
import MatchesTab from './MatchesTab';
import MessagesTab from './MessagesTab';

const MatchesDashboard = () => {
  // track state of matches tab and messages tab
  const [showMatchesTab, setShowMatchesTab] = useState(true);
  const [showMessagesTab, setShowMessagesTab] = useState(false);

  return (
    <div className='matches-dashboard'>
      <div className='match-msg-buttons'>
        <button
          onClick={() => {
            setShowMatchesTab(true);
            setShowMessagesTab(false);
          }}
        >
          Matches
        </button>
        <button
          onClick={() => {
            setShowMessagesTab(true);
            setShowMatchesTab(false);
          }}
        >
          Messages
        </button>
      </div>
      {showMatchesTab && <MatchesTab />}
      {showMessagesTab && <MessagesTab />}
    </div>
  );
};

export default MatchesDashboard;
