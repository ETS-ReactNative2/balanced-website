import React from 'react';
import { Switch, Route } from 'react-router';
import Amount from './Amount';

import './DonationBody.css';

const Next = ({ nextStep }) => (
  <div id="Donate_Next">
    <div onClick={nextStep} id="Donate_NextButton">
      NEXT
    </div>
  </div>
);

export default ({
  currentAmount,
  recurring,
  selectAmount,
  setRecurring,
  nextStep,
  history,
}) => (
  <div id="Donate_DonationBody">
    <Switch>
      <Route path="/" component={Amount} />
    </Switch>

    <Next nextStep={() => history.push('/2')} />
  </div>
);
