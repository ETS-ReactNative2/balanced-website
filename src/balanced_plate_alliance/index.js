import React, { Component } from 'react';
import Hero from './Hero';
import Intro from './Intro';
import Signup from './Signup';
import About from './About';
import Campaigns from './Campaigns';
import Share from './Share';
import MakeAnImpact from './MakeAnImpact';

export default class extends Component {
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
    return (
      <div>
        <Hero />
        <Intro />
        <Signup />
        <About />
        <Campaigns />
        <Share />
        <MakeAnImpact />
      </div>
    );
  }
}
