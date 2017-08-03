import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserView from  './components/userView';
import User from './models/user';
import 'normalize.css';
import './css/app.css'

class App extends Component {
  render() {
    var user = new User({
      firstName: 'Sophie',
      lastName: 'Figgis',
      jobTitle: 'Full Stack Developer',
      location: 'Windsor, UK',
      tagline: 'javascript... hmm...',
      imgUrl: 'http://cdn.viralscape.com/wp-content/uploads/2014/09/Computer-Cat.jpg'
    });
    return (
      <UserView id="root" user={ user } />
    );
  }
}

export default App;
