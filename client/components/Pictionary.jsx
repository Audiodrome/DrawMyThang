import React from 'react';
import ChatBox from './chatBox.jsx';
import Canvas from './canvas.jsx';
import UserBox from './userBox.jsx';
import GamePlayTimer from './gamePlayTimer.jsx'

const Pictionary = (props) => {
  return (
    <div id="whole">
      <GamePlayTimer/>
      <section className="sidebar">
        <UserBox />
        <ChatBox />
      </section>
      <Canvas />
    </div>
  );
};

export default Pictionary;