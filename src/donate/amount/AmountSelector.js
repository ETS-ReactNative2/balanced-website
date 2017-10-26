import React from "react";
import { FormField } from "react-form";
import Amount from "./Amount";

const TOP_AMOUNTS = [10, 40, 100];
const BOTTOM_AMOUNTS = [500, "OTHER"];

const AmountSelector = ({ fieldApi, ...rest }) => {
  const props = { ...fieldApi, rest };
  const { getValue, getError } = fieldApi;
  const error = getError();
  return (
    <div>
      <div className="Donate_AmountRow">
        {TOP_AMOUNTS.map(a => (
          <Amount key={a} amount={a} selected={getValue() === a} {...props} />
        ))}
      </div>

      <div className="Donate_AmountRow">
        <div className="Donate_Space" />
        {BOTTOM_AMOUNTS.map(a => (
          <Amount amount={a} key={a} selected={getValue() === a} {...props} />
        ))}
        <div className="Donate_Space" />
      </div>

      <h5>{error}</h5>
    </div>
  );
};

export default ({ value, ...props }) => (
  <FormField field="amount">
    <AmountSelector value={value} {...props} />
  </FormField>
);
