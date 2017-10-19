import React from "react";
import Amount from "./Amount";
import Info from "./Info";

import "./DonationBody.css";

const COMPONENTS = [Amount, Info];

export default props => (
  <div id="Donate_DonationBody">{COMPONENTS[props.currentStep](props)}</div>
);
