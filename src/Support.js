import React from 'react';
import SectionHeader from './SectionHeader';
import BodyText from './BodyText';

import './Support.css';

import AHA from './AHA.png';
import OAC from './OAC.png';
import DefeatDiabetes from './Defeat Diabetes.png';
import Mayo from './Mayo.png';
import KaiserPermanente from './Kaiser Permanente.png';

export default () =>
  <div id="Support_OuterContainer">
    <div id="Support_InnerContainer">
      <SectionHeader>WE ALREADY HAVE THE SUPPORT</SectionHeader>
      <BodyText>
        This common sense change is supported by an array of public health
        organizations like the <strong>Obesity Action Coalition</strong> and{' '}
        <strong>The Defeat Diabetes Foundation</strong>
        , and leading health care providers like{' '}
        <strong>Kaiser Permanente</strong> and <strong>The Mayo Clinic</strong>
        .
      </BodyText>
      <div className="Support_logos">
        <img src={OAC} />
        <img src={DefeatDiabetes} />
        <img src={Mayo} />
        <img src={KaiserPermanente} />
      </div>
    </div>
  </div>;
