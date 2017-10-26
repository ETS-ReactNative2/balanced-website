import React from "react";
import { Form, NestedForm } from "react-form";

import Amount from "./amount";
import Info from "./info";
import Payment from "./payment";

import "./DonationBody.css";

const COMPONENTS = [Amount, Info, Payment];

const getClass = (id, currentStep) => {
  const result = id === currentStep ? "" : "Donate_Hide";
  return result;
};

export default ({ currentStep, ...props }) => (
  <Form>
    {({ values }) => {
      return (
        <div id="Donate_DonationBody">
          <h5>{JSON.stringify(values)}</h5>
          {COMPONENTS.map((Component, id) => (
            <Component
              key={id}
              values={values}
              className={getClass(id, currentStep)}
              {...props}
            />
          ))}
        </div>
      );
    }}
  </Form>
);
