import React from "react";

import AmountButton from "./AmountButton";
import AmountInput from "./AmountInput";

const showInput = (amount, selected, currentAmount) => {
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

export default ({ amount, selected, currentAmount, selectAmount }) =>
  showInput(amount, selected, currentAmount) ? (
    <AmountInput selectAmount={selectAmount} />
  ) : (
    <AmountButton
      amount={amount}
      selected={selected}
      selectAmount={selectAmount}
    />
  );
