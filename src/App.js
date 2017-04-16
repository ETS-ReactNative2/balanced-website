import React, {Component} from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Intro from './Intro';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Intro />
        <Signup />
      </div>
    );
  }
}

export default App;
