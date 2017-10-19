import React from "react";
import "./Checkbox.css";

const Checkbox = ({ toggle, checked, children }) => (
  <div onClick={toggle} className="Donate_CheckboxContainer">
    <div className="Donate_Checkbox">{checked && "✔"}</div>
    <span>{children}</span>
  </div>
);

export default Checkbox;
