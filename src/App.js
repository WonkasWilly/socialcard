import React, { Component } from 'react';
import Image from './components/Image';
import Profile from './components/Profile';
import Data from './components/Data';
import GenerateUser from './components/GenerateUser';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profilePics: [],
      currentPhoto: null,
    }
    this.generateUser = this.generateUser.bind(this);
  }
	componentWillMount() {
    //get random number with a min of 0 and max of 100
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

		//API to retrieve random user profile photos
    fetch('https://randomuser.me/api/?results=100')
		.then(response => response.json())
		.then((data) => {
      const profilePics = data.results.map((eachProfile) => eachProfile.picture.medium);

      //use random number to get a random image
      const currentPhoto = profilePics[getRandomInt(0, profilePics.length)];
      this.setState({
        profilePics: profilePics,
        currentPhoto: currentPhoto,
      })
    });
  }

  generateUser(allPhotos) {
    //get random number with a min of 0 and max of 100
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //use random number to get a random image
    const currentPhoto = allPhotos[getRandomInt(0, allPhotos.length)];
    this.setState({
      currentPhoto: currentPhoto,
    })

  }
	
  render() {
    return (
      <div className="App">
      	<Profile currentPhoto={this.state.currentPhoto} />
        <Image />
        <Data />
        <GenerateUser generateUser={this.generateUser} profilePics={this.state.profilePics} />
      </div>
    );
  }
}

export default App;