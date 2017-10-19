import React from 'react';
import './DonationBody.css';

const TOP_AMOUNTS = ['$10', '$40', '$100'];
const BOTTOM_AMOUNTS = ['$500', 'OTHER'];

const Amount = ({ amount, selected, selectAmount }) => (
  <div
    onClick={() => selectAmount(amount)}
    className={`Donate_Amount ${selected ? 'Donate_AmountSelected' : ''}`}
  >
    {amount}
  </div>
);

const Recurring = ({ recurring, setRecurring }) => (
  <div onClick={setRecurring} id="Donate_Recurring">
    <div id="Donate_Checkbox">{recurring && '✔'}</div>
    <span>Yes! Show my support by making this a recurring donation.</span>
  </div>
);

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
}) => (
  <div id="Donate_DonationBody">
    <h5>Select an amount</h5>

    <div className="Donate_AmountRow">
      {TOP_AMOUNTS.map(a => (
        <Amount
          key={a}
          amount={a}
          selected={currentAmount == a}
          selectAmount={selectAmount}
        />
      ))}
    </div>

    <div className="Donate_AmountRow">
      <div className="Donate_Space" />
      {BOTTOM_AMOUNTS.map(a => (
        <Amount
          key={a}
          amount={a}
          selected={currentAmount == a}
          selectAmount={selectAmount}
        />
      ))}
      <div className="Donate_Space" />
    </div>

    <Recurring recurring={recurring} setRecurring={setRecurring} />

    <Next nextStep={nextStep} />
  </div>
);
