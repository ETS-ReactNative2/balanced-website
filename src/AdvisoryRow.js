import React from 'react';
import AdvisoryHeads from './AdvisoryHeads';
import AdvisoryBio from './AdvisoryBio';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './AdvisoryRow.css';

export default ({ selectedName, onClick }) => (
  <div className="AdvisoryRow">
    <AdvisoryHeads onClick={onClick} selectedName={selectedName} />
    <CSSTransitionGroup
      transitionName="AdvisoryBio_Transition"
      transitionEnterTimeout={600}
      transitionLeaveTimeout={300}
    >
      <AdvisoryBio key={selectedName} selectedName={selectedName} />
    </CSSTransitionGroup>
  </div>
);
