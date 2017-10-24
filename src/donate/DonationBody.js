import React from "react";
import { Form } from "react-form";

import Amount from "./amount";
import Info from "./info";
import Payment from "./Payment";

import "./DonationBody.css";

const COMPONENTS = [Amount, Info, Payment];

export default props => (
  <Form>
    <div id="Donate_DonationBody">{COMPONENTS[props.currentStep](props)}</div>
  </Form>
);
