import React from 'react';
import SectionHeader from './SectionHeader';
import AdvisoryProfile from './AdvisoryProfile';
import AdvisoryHeads from './AdvisoryHeads';
import AdvisoryBio from './AdvisoryBio';
import './AdvisoryBoard.css';

export default () => (
  <div id="AdvisoryBoard_OuterContainer">
    <SectionHeader>ADVISORY BOARD</SectionHeader>
    <AdvisoryProfile name="robert" />
    <AdvisoryHeads />
    <AdvisoryBio name="audrey" />
  </div>
);
