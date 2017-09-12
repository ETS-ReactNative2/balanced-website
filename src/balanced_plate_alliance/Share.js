import React from 'react';
import './Share.css';

import facebook from './facebook.png';
import twitter from './twitter.png';

export default () => (
  <div id="Share">
    <h1>SHARE</h1>
    <span>Let your friends know how they can get involved</span>
    <div id="ShareIcons">
      <img src={facebook} />
      <img src={twitter} />
    </div>
  </div>
);
