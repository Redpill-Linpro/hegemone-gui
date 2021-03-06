import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GraphList from './GraphList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Plantmonitor</h2>
        </div>
        <div className="App-intro">
          <GraphList></GraphList>
        </div>
      </div>
    );
  }
}

export default App;