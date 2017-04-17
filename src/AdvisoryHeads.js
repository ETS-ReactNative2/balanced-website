import React from 'react';
import './AdvisoryHeads.css';

import audrey_advisory_head from './audrey_advisory_head.jpg';

const NAMES = {
  greger: 'Dr. Michael Greger',
  asha: 'Dr. Asha Subramanian',
  michelle: 'Dr. Michelle McMacken',
  matt: 'Matt Ruscigno',
};

const IMAGES = {
  greger: require('./greger_head.jpg'),
  asha: require('./asha_head.jpg'),
  michelle: require('./michelle_head.jpg'),
  matt: require('./matt_head.jpg'),
};

const AdvisoryHead = ({name, showOverlay, onClick}) => (
  <div onClick={() => onClick(name)} className="AdvisoryHeads_InnerContainer">
    <div className="AdvisoryHeads_ImageContainer">
      <img src={IMAGES[name]} />
      {showOverlay && <div className="AdvisoryHeads_Overlay" />}
    </div>
    <h1 className="AdvisoryHeads_Name">{NAMES[name]}</h1>
    <h2 className="AdvisoryHeads_Title">Board of Advisors</h2>
  </div>
);

export default ({selectedName, onClick}) => (
  <div id="AdvisoryHeads_Container">
    <AdvisoryHead
      onClick={onClick}
      name="michelle"
      showOverlay={selectedName === 'michelle'}
    />
    <AdvisoryHead
      onClick={onClick}
      name="greger"
      showOverlay={selectedName === 'greger'}
    />
    <AdvisoryHead
      onClick={onClick}
      name="asha"
      showOverlay={selectedName === 'asha'}
    />
    <AdvisoryHead
      onClick={onClick}
      name="matt"
      showOverlay={selectedName === 'matt'}
    />
  </div>
);
