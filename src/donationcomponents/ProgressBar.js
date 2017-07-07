import React from 'react';
import Text from 'react';
import './ProgressBar.css';
import ProgressCircle from './ProgressCircle';
//import SectionHeader from './SectionHeader';
//import BodyText from './BodyText';

export default () => (
<div id="donateprogress">
  DONATE TODAY
  <div id="progressbar">
    <div id="steps">
      <ProgressCircle />
      <p>
      Amount
      </p>
    </div>

    <div id="steps">
      <ProgressCircle />
      <p>
      Info
      </p>
    </div>

    <div id="steps">
      <ProgressCircle />
      <p>
      Payment
      </p>
    </div>
    <div id="line"></div>

  </div>

</div>
)
