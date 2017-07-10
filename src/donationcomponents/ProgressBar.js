import React from 'react';
import './ProgressBar.css';
import ProgressCircle from './ProgressCircle';

export default () => (
<div id="donateprogress">
  DONATE TODAY
  <div id="progressbar">
    <div id="steps">
      <ProgressCircle active={true} label="1" />
      <p>
      Amount
      </p>
    </div>

    <div id="steps">
      <ProgressCircle label="2"/>
      <p>
      Info
      </p>
    </div>

    <div id="steps">
      <ProgressCircle label="3"/>
      <p>
      Payment
      </p>
    </div>
    <div id="line"></div>

  </div>

</div>
)
