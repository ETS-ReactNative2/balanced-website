import React from 'react';
import './AdvisoryHeads.css';
import audrey_advisory_head from './audrey_advisory_head.jpg';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { NAMES, IMAGES } from './advisory_board_constants';

const AdvisoryHead = ({ name, showOverlay, onClick }) => (
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
  </div>
);

export default ({ selectedName, onClick }) => (
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
      <AdvisoryHead
        onClick={onClick}
        name="reshma"
        showOverlay={selectedName === 'reshma'}
      />
    </div>
    <div className="AdvisoryHeads_Container">
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
      <AdvisoryHead
        onClick={onClick}
        name="pamela"
        showOverlay={selectedName === 'pamela'}
      />
      <AdvisoryHead
        onClick={onClick}
        name="jackson"
        showOverlay={selectedName === 'jackson'}
      />
    </div>
    <div className="AdvisoryHeads_Container">
      <AdvisoryHead
        onClick={onClick}
        name="aaron"
        showOverlay={selectedName === 'aaron'}
      />
    </div>
  </div>
);
