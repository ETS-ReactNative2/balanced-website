import React from 'react';
import './AdvisoryHeads.css';

import audrey_advisory_head from './audrey_advisory_head.jpg';

const AdvisoryHead = () => (
  <div className="AdvisoryHeads_InnerContainer">
    <img src={audrey_advisory_head} />
    <h1 className="AdvisoryHeads_Name">AUDREY SANCHEZ</h1>
    <h2 className="AdvisoryHeads_Title">Executive Director</h2>
  </div>
);

export default () => (
  <div id="AdvisoryHeads_Container">
    <AdvisoryHead />
    <AdvisoryHead />
    <AdvisoryHead />
    <AdvisoryHead />
  </div>
);
