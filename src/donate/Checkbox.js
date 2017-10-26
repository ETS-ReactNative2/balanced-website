import React from "react";
import { FormField } from "react-form";

import "./Checkbox.css";

const Checkbox = ({ fieldApi: { getValue, setValue }, children }) => {
  const checked = getValue();
  const toggle = () => setValue(!checked);

  return (
    <div onClick={toggle} className="Donate_CheckboxContainer">
      <div className="Donate_Checkbox">{checked && "✔"}</div>
      <span>{children}</span>
    </div>
  );
};

export default ({ fieldName, ...props }) => (
  <FormField field={fieldName}>
    <Checkbox {...props} {...props} />
  </FormField>
);
