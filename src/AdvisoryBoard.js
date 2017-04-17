import React from 'react';
import SectionHeader from './SectionHeader';
import AdvisoryProfile from './AdvisoryProfile';
import './AdvisoryBoard.css';

export default () => (
  <div id="AdvisoryBoard_OuterContainer">
    <div id="AdvisoryBoard_InnerContainer">
      <SectionHeader>ADVISORY BOARD</SectionHeader>
      <AdvisoryProfile name="robert" />
    </div>
  </div>
);
