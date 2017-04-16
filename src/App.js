import React, {Component} from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Intro from './Intro';
import Signup from './Signup';
import WhatWereAskingFor from './WhatWereAskingFor';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Intro />
        <Signup />
        <WhatWereAskingFor />
      </div>
    );
  }
}

export default App;
