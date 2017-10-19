import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Intro from './Intro';
import Signup from './Signup';
import WhatWereAskingFor from './WhatWereAskingFor';
import Support from './Support';
import OurStory from './OurStory';
import AdvisoryBoard from './AdvisoryBoard';
import Donate from './donate';
import OurTeam from './OurTeam';
import Footer from './Footer';
import MobileAdvisoryBoard from './MobileAdvisoryBoard';
import BPA from './balanced_plate_alliance';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  setIsMobile() {
    this.setState({
      isMobile: window.innerWidth <= 1024,
    });
  }

  componentWillMount() {
    this.setIsMobile();
  }

  componentDidMount() {
    window.addEventListener('resize', this.setIsMobile.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setIsMobile);
  }

  render() {
    const { isMobile } = this.state;
    return (
      <div>
        <div id="SuperContainer">
          <Hero />
        </div>
        <Intro />
        <Signup />
        <WhatWereAskingFor />
        <Support />
        <OurStory />
        {isMobile ? <MobileAdvisoryBoard /> : <AdvisoryBoard />}
        <Donate />
        <OurTeam />
      </div>
    );
  }
}

export default () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />
      <Route path="/bpa" component={BPA} />
      <Footer />
    </div>
  </Router>
);
