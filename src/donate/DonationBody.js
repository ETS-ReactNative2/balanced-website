import React from "react";
import { Form } from "react-form";

import Amount from "./amount";
import Info from "./info";
import Payment from "./payment";
import Thankyou from "./thankyou";

import "./DonationBody.css";

const COMPONENTS = [Amount, Info, Payment, Thankyou];

const getClass = (id, currentStep) => {
  const result = id === currentStep ? "" : "Donate_Hide";
  return result;
};

export default ({ currentStep, ...props }) => (
  <Form>
    {({ values }) => {
      return (
        <div id="Donate_DonationBody">
          {COMPONENTS.map((Component, id) => (
            <div key={id} className={getClass(id, currentStep)}>
              <Component
                values={values}
                className={getClass(id, currentStep)}
                {...props}
              />
            </div>
          ))}
        </div>
      );
    }}
  </Form>
);
