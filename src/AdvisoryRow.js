import React from 'react';
import AdvisoryHead from './AdvisoryHeads';
import AdvisoryBio from './AdvisoryBio';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './AdvisoryRow.css';

const getSelectedName = (selectedName, names) =>
  names.includes(selectedName) && selectedName;

export default ({ selectedName, onClick, names }) => (
  <div className="AdvisoryRow">
    <div id="AdvisoryHeads_OuterContainer">
      <div className="AdvisoryHeads_Container">
        {names.map(name => (
          <AdvisoryHead
            key={name}
            onClick={onClick}
            name={name}
            showOverlay={selectedName === name}
          />
        ))}
      </div>
    </div>
    <CSSTransitionGroup
      transitionName="AdvisoryBio_Transition"
      transitionEnterTimeout={600}
      transitionLeaveTimeout={300}
    >
      <AdvisoryBio
        key={selectedName}
        selectedName={getSelectedName(selectedName, names)}
      />
    </CSSTransitionGroup>
  </div>
);
