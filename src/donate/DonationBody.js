import React from 'react';
import './DonationBody.css';

const TOP_AMOUNTS = ['$10', '$40', '$100'];
const BOTTOM_AMOUNTS = ['$500', 'OTHER'];

const Amount = ({ amount, selected }) => (
  <div className={`Donate_Amount ${selected ? 'Donate_AmountSelected' : ''}`}>
    {amount}
  </div>
);

const Recurring = ({ recurring }) => (
  <div id="Donate_Recurring">
    <div
      id="Donate_Checkbox"
      className={recurring ? 'Donate_CheckboxChecked' : ''}
    />
    <span>Yes! Show my support by making this a recurring donation.</span>
  </div>
);

const Next = () => (
  <div id="Donate_Next">
    <div id="Donate_NextButton">NEXT</div>
  </div>
);

export default ({ currentAmount, recurring }) => (
  <div id="Donate_DonationBody">
    <h5>Select an amount</h5>

    <div className="Donate_AmountRow">
      {TOP_AMOUNTS.map(a => (
        <Amount amount={a} selected={currentAmount == a} />
      ))}
    </div>

    <div className="Donate_AmountRow">
      <div className="Donate_Space" />
      {BOTTOM_AMOUNTS.map(a => (
        <Amount amount={a} selected={currentAmount == a} />
      ))}
      <div className="Donate_Space" />
    </div>

    <Recurring />

    <Next />
  </div>
);
