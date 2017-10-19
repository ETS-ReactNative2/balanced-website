import React from 'react';
import './AdvisoryHead.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { NAMES, IMAGES } from './advisory_board_constants';

export default ({ name, showOverlay, onClick }) => (
  <div
    id={`Head_${name}`}
    onClick={() => onClick(name)}
    className="AdvisoryHead_InnerContainer"
  >
    <div className="AdvisoryHead_ImageContainer">
      <img alt={name} src={IMAGES[name]} />
      <CSSTransitionGroup
        transitionName="AdvisoryHead_Overlay_Transition"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {showOverlay && <div className="AdvisoryHead_Overlay" />}
      </CSSTransitionGroup>
    </div>
    <h1 className="AdvisoryHead_Name">{NAMES[name]}</h1>
  </div>
);
