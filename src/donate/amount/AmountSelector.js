import React from "react";
import { FormField } from "react-form";
import Amount from "./Amount";

const TOP_AMOUNTS = [10, 40, 100, 500, "OTHER"];

const AmountSelector = ({ fieldApi, ...rest }) => {
  const props = { ...fieldApi, rest };
  const { getValue } = fieldApi;
  return (
    <div>
      <div id="Donate_Amounts">
        {TOP_AMOUNTS.map(a => (
          <Amount key={a} amount={a} selected={getValue() === a} {...props} />
        ))}
      </div>
    </div>
  );
};

export default ({ value, ...props }) => (
  <FormField field="amount">
    <AmountSelector value={value} {...props} />
  </FormField>
);
