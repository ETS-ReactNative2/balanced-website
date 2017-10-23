import React from "react";

const parseAmount = amount => (amount === "OTHER" ? amount : `$${amount}`);

export default ({ selectAmount, selected, amount }) => (
  <div
    onClick={() => selectAmount(amount)}
    className={`Donate_Amount ${selected ? "Donate_AmountSelected" : ""}`}
  >
    {parseAmount(amount)}
  </div>
);
