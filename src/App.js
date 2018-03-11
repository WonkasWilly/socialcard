import React, { Component } from 'react';
import Image from './components/Image';
import Data from './components/Data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image />
        <Data />
      </div>
    );
  }
}

export default App;
