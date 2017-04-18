import React, {Component} from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Intro from './Intro';
import Signup from './Signup';
import WhatWereAskingFor from './WhatWereAskingFor';
import Support from './Support';
import OurStory from './OurStory';
import AdvisoryBoard from './AdvisoryBoard';
import Donate from './Donate';
import OurTeam from './OurTeam';
import Footer from './Footer';

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
        <AdvisoryBoard />
        <Donate />
        <OurTeam />
        <Footer />
      </div>
    );
  }
}

export default App;
