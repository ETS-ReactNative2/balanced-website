import React from "react";

import AmountButton from "./AmountButton";
import AmountInput from "./AmountInput";

const showInput = ({ amount, selected, getValue }) => {
  if (selected && amount === "OTHER") return true;

  const currentAmount = getValue();

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

export default props =>
  showInput(props) ? <AmountInput {...props} /> : <AmountButton {...props} />;
