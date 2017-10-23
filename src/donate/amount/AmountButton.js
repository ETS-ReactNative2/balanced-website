import React from "react";

const parseAmount = amount => (amount === "OTHER" ? amount : `$${amount}`);

export default ({ setValue, amount, selected }) => (
  <div
    onClick={() => setValue(amount)}
    className={`Donate_Amount ${selected ? "Donate_AmountSelected" : ""}`}
  >
    {parseAmount(amount)}
  </div>
);
