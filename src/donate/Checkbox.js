import React from "react";
import { FormInput } from "react-form";

import "./Checkbox.css";

const Checkbox = ({ getValue, setValue, children }) => {
  const checked = getValue();
  const toggle = () => setValue(!checked);

  return (
    <div onClick={toggle} className="Donate_CheckboxContainer">
      <div className="Donate_Checkbox">{checked && "✔"}</div>
      <span>{children}</span>
    </div>
  );
};

const createCheckbox = (value, props) => formProps => (
  <Checkbox value={value} {...props} {...formProps} />
);

export default ({ value, ...props }) => (
  <FormInput field="recurring">{createCheckbox(value, props)}</FormInput>
);
