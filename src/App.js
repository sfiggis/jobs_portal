import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserView from  './components/userView';
import User from './models/user';
import 'normalize.css';
import './css/app.css';
import 'whatwg-fetch'

class App extends Component {
  render() {
    var user;
    // if (localStorage.getItem(1) !== null) {
    //   user = new User(JSON.parse(localStorage.getItem(1)));
    // } else {
    //   user = new User({
    //     firstName: 'Sophie',
    //     lastName: 'Figgis',
    //     jobTitle: 'Full Stack Developer',
    //     location: 'Windsor, UK',
    //     tagline: 'javascript... hmm...',
    //     imgUrl: 'http://cdn.viralscape.com/wp-content/uploads/2014/09/Computer-Cat.jpg'
    //   });
    // }
// console.log(fetch('/users.json', {
//   headers: {
//     'Access-Control-Allow-Origin': '*'
//   }
// })
//   .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json)
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   }));

    return (
      <UserView id="root" user={ user } />
    );
  }
}

export default App;
