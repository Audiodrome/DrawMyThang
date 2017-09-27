import React from 'react';
import ChatBox from './chatBox.jsx';
import Canvas from './canvas.jsx';
import UserBox from './userBox.jsx';
import GamePlayTimer from './gamePlayTimer.jsx'

const Pictionary = (props) => {
  return (
    <div>
      <GamePlayTimer/>
      <div id="whole">
        <div className="sidebar">
          <UserBox />
          <ChatBox />
        </div>
        <Canvas />
      </div>
    </div>
  );
};

export default Pictionary;