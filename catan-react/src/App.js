import React, { Component } from 'react';
import GamesContainer from './components/GamesContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Games</h2>
        <GamesContainer />
        <div id="chart"></div>
      </div>
    );
  }
}

export default App;
