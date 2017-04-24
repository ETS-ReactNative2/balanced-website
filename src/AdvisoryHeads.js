import React from 'react';
import './AdvisoryHeads.css';
import audrey_advisory_head from './audrey_advisory_head.jpg';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const NAMES = {
  robert: 'Capt. Robert Atcheson',
  greger: 'Dr. Michael Greger, M.D. FACLM',
  asha: 'Dr. Asha Subramanian, M.D.',
  michelle: 'Dr. Michelle McMacken, M.D.',
  matt: 'Matt Ruscigno, M.P.H. R.D.',
  julieanna: 'Julieanna Hever, M.S. R.D. C.P.T.',
  reshma: 'Dr. Reshma Shah, M.D.',
};

const IMAGES = {
  robert: require('./robert.jpg'),
  greger: require('./greger_head.jpg'),
  asha: require('./asha_head.jpg'),
  michelle: require('./michelle_head.jpg'),
  matt: require('./matt_head.jpg'),
  julieanna: require('./julieanna_head.jpg'),
  reshma: require('./reshma_head.jpg'),
};

const AdvisoryHead = ({name, showOverlay, onClick}) => (
  <div onClick={() => onClick(name)} className="AdvisoryHeads_InnerContainer">
    <div className="AdvisoryHeads_ImageContainer">
      <img src={IMAGES[name]} />
      <CSSTransitionGroup
        transitionName="AdvisoryHeads_Overlay_Transition"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {showOverlay && <div className="AdvisoryHeads_Overlay" />}
      </CSSTransitionGroup>
    </div>
    <h1 className="AdvisoryHeads_Name">{NAMES[name]}</h1>
    <h2 className="AdvisoryHeads_Title">Board of Advisors</h2>
  </div>
);

export default ({selectedName, onClick}) => (
  <div id="AdvisoryHeads_OuterContainer">
    <div className="AdvisoryHeads_Container">
      <AdvisoryHead
        onClick={onClick}
        name="greger"
        showOverlay={selectedName === 'greger'}
      />
      <AdvisoryHead
        onClick={onClick}
        name="michelle"
        showOverlay={selectedName === 'michelle'}
      />
      <AdvisoryHead
        onClick={onClick}
        name="julieanna"
        showOverlay={selectedName === 'julieanna'}
      />
    </div>
    <div className="AdvisoryHeads_Container">
      <AdvisoryHead
        onClick={onClick}
        name="reshma"
        showOverlay={selectedName === 'reshma'}
      />
      <AdvisoryHead
        onClick={onClick}
        name="matt"
        showOverlay={selectedName === 'matt'}
      />
      <AdvisoryHead
        onClick={onClick}
        name="asha"
        showOverlay={selectedName === 'asha'}
      />
    </div>
  </div>
);
