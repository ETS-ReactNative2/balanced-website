import React from "react";
import Checkbox from "./Checkbox";
import "./Amount.css";

const TOP_AMOUNTS = [10, 40, 100];
const BOTTOM_AMOUNTS = [500, "OTHER"];

const parseAmount = amount => (amount === "OTHER" ? amount : `$${amount}`);

const showOther = (amount, selected, currentAmount) => {
  if (selected && amount === "OTHER") return true;

  if (
    amount === "OTHER" &&
    currentAmount !== 10 &&
    currentAmount !== 40 &&
    currentAmount !== 100 &&
    currentAmount !== 500
  ) {
    return true;
  }
};

class Other extends React.Component {
  componentDidMount() {
    this.input.focus();
  }

  handleChange = e => {
    const value = e.target.value;
    this.props.selectAmount(value);
  };

  render() {
    return (
      <div className="Donate_Amount">
        <span id="Donate_Currency">$</span>
        <input
          onChange={this.handleChange}
          ref={i => (this.input = i)}
          id="Donate_Other"
          type="number"
        />
      </div>
    );
  }
}

const AmountSelector = ({ selectAmount, selected, amount }) => (
  <div
    onClick={() => selectAmount(amount)}
    className={`Donate_Amount ${selected ? "Donate_AmountSelected" : ""}`}
  >
    {parseAmount(amount)}
  </div>
);

const Amount = ({ amount, selected, selectAmount, currentAmount }) => (
  <div>
    {showOther(amount, selected, currentAmount) ? (
      <Other selectAmount={selectAmount} />
    ) : (
      <AmountSelector
        amount={amount}
        selected={selected}
        selectAmount={selectAmount}
      />
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
    <h5>Select an amount:</h5>

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
          currentAmount={currentAmount}
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
