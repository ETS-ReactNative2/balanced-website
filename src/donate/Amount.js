import React from "react";
import Checkbox from "./Checkbox";
import "./Amount.css";

const TOP_AMOUNTS = [10, 40, 100];
const BOTTOM_AMOUNTS = [500, "OTHER"];

const parseAmount = amount => (amount === "OTHER" ? amount : `$${amount}`);

const showOther = (amount, selected) => amount === "OTHER" && selected;

const Other = () => (
  <div className="Donate_Amount">
    <span id="Donate_Currency">$</span>
    <input id="Donate_Other" type="number" />
  </div>
);

const Amount = ({ amount, selected, selectAmount }) => (
  <div>
    {showOther(amount, selected) ? (
      <Other selectAmount={selectAmount} />
    ) : (
      <div
        onClick={() => selectAmount(amount)}
        className={`Donate_Amount ${selected ? "Donate_AmountSelected" : ""}`}
      >
        {parseAmount(amount)}
      </div>
    )}
  </div>
);

export default ({
  currentAmount,
  recurring,
  selectAmount,
  setRecurring,
  nextStep
}) => (
  <div>
    <h5>Select an amount</h5>

    <div className="Donate_AmountRow">
      {TOP_AMOUNTS.map(a => (
        <Amount
          key={a}
          amount={a}
          selected={currentAmount === a}
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
          selected={currentAmount === a}
          selectAmount={selectAmount}
        />
      ))}
      <div className="Donate_Space" />
    </div>

    <br />

    <Checkbox checked={recurring} toggle={setRecurring}>
      Yes! Show my support by making this a recurring donation.
    </Checkbox>

    <div id="Donate_Next">
      <div onClick={nextStep} id="Donate_NextButton">
        NEXT
      </div>
    </div>
  </div>
);
