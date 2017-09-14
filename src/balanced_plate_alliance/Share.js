import React from 'react';
import './Share.css';

import facebook from './facebook.png';
import twitter from './twitter.png';

export default () => (
  <div id="Share">
    <h1>SHARE</h1>
    <span>Let your friends know how they can get involved</span>
    <div id="ShareIcons">
      <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//balanced.org/bpa">
        <img src={facebook} />
      </a>
      <a href="https://twitter.com/home?status=Healthy%20food%20is%20a%20right,%20and%20we're%20going%20to%20fight%20for%20it%3A%20http%3A//balanced.org/bpa">
        <img src={twitter} />
      </a>
    </div>
  </div>
);
