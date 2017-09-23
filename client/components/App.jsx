import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header.jsx';
import ChatBox from './chatBox.jsx';
import Canvas from './canvas.jsx';
//import openSocket from 'socket.io-client';

class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <Canvas />
        <ChatBox />
      </div>
    );
  }
}

export default App;
