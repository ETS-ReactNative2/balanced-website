import React, { Component } from 'react';
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
import MobileAdvisoryBoard from './MobileAdvisoryBoard';
import BPA from './balanced_plate_alliance';

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
    return <BPA />;
    // return (
    //   <div>
    //     <div id="SuperContainer">
    //       <NavBar />
    //       <Hero />
    //     </div>
    //     <Intro />
    //     <Signup />
    //     <WhatWereAskingFor />
    //     <Support />
    //     <OurStory />
    //     {isMobile ? <MobileAdvisoryBoard /> : <AdvisoryBoard />}
    //     <Donate />
    //     <OurTeam />
    //     <Footer />
    //   </div>
    // );
  }
}

export default App;
