import React from 'react';
import AdvisoryHead from './AdvisoryHead';
import AdvisoryBio from './AdvisoryBio';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './AdvisoryRow.css';

const showBio = (selectedName, names) => names.includes(selectedName);

export default ({ selectedName, onClick, names }) => (
  <div className="AdvisoryRow">
    <div className="AdvisoryHead_OuterContainer">
      <div className="AdvisoryHead_Container">
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
      key={`showRow ${showBio}`}
      transitionName="AdvisoryBio_Transition"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {showBio(selectedName, names) &&
        <AdvisoryBio selectedName={selectedName} />}
    </CSSTransitionGroup>
  </div>
);
