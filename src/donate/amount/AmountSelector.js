import React from "react";
import { FormField } from "react-form";
import Amount from "./Amount";

const TOP_AMOUNTS = [10, 40, 100];
const BOTTOM_AMOUNTS = [500, "OTHER"];

const AmountSelector = ({ fieldApi, ...rest }) => {
  const props = { ...fieldApi, rest };
  return (
    <div>
      <div className="Donate_AmountRow">
        {TOP_AMOUNTS.map(a => (
          <Amount
            key={a}
            amount={a}
            selected={fieldApi.getValue() === a}
            {...props}
          />
        ))}
      </div>

      <div className="Donate_AmountRow">
        <div className="Donate_Space" />
        {BOTTOM_AMOUNTS.map(a => (
          <Amount
            amount={a}
            key={a}
            selected={fieldApi.getValue() === a}
            {...props}
          />
        ))}
        <div className="Donate_Space" />
      </div>
    </div>
  );
};

export default ({ value, ...props }) => (
  <FormField field="amount">
    <AmountSelector value={value} {...props} />
  </FormField>
);
