import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';
import Header from './Header.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Pictionary from './Pictionary.jsx';
import { app, base } from '../../env/base.jsx';

//import openSocket from 'socket.io-client';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div style={{ textAlign: 'center', position: 'absolute', top: '25%', left: '50%' }}>
          <h3>Loading</h3>
          <Spinner /> 
        </div>
      );
    }

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header authenticated={this.state.authenticated} />
            <div className="main-content" style={{padding: "1rem"}} >
              <div className="workspace" >
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/pictionary" component={Pictionary} />
              </div>
            </div>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;