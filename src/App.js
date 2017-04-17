import React, {Component} from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Intro from './Intro';
import Signup from './Signup';
import WhatWereAskingFor from './WhatWereAskingFor';
import Support from './Support';
import OurStory from './OurStory';
import OurStoryDropdown from './OurStoryDropdown';
import AdvisoryBoard from './AdvisoryBoard';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Intro />
        <Signup />
        <WhatWereAskingFor />
        <Support />
        <OurStory />
        <OurStoryDropdown />
        <AdvisoryBoard />
      </div>
    );
  }
}

export default App;
