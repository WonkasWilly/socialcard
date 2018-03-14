import React, { Component } from 'react';
import Image from './components/Image';
import Profile from './components/Profile';
import Data from './components/Data';
import './App.css';

class App extends Component {
	componentWillMount() {
		//API to retrieve random user profile photos
		fetch('https://randomuser.me/api/?results=100')
		.then(response => response.json())
		.then(data => console.log(data));

	}
	
  render() {
    return (
      <div className="App">
      	<Profile />
        <Image />
        <Data />
      </div>
    );
  }
}

export default App;
