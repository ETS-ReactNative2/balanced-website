import React from "react";
import { FormInput } from "react-form";
import Amount from "./Amount";

const TOP_AMOUNTS = [10, 40, 100];
const BOTTOM_AMOUNTS = [500, "OTHER"];

export default ({ value, ...props }) => (
  <FormInput field="amount">
    {({ setValue, getValue, setTouched }) => {
      return (
        <div>
          <div className="Donate_AmountRow">
            {TOP_AMOUNTS.map(a => (
              <Amount key={a} amount={a} selected={value === a} {...props} />
            ))}
          </div>

          <div className="Donate_AmountRow">
            <div className="Donate_Space" />
            {BOTTOM_AMOUNTS.map(a => (
              <Amount amount={a} key={a} selected={value === a} {...props} />
            ))}
            <div className="Donate_Space" />
          </div>
        </div>
      );
    }}
  </FormInput>
);
