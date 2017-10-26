import React from "react";
import { Form, NestedForm } from "react-form";

import Checkbox from "../Checkbox";
import AmountSelector from "./AmountSelector";
import "./index.css";

export default ({
  currentAmount,
  selectAmount,
  setRecurring,
  nextStep,
  values,
  className
}) => (
  <NestedForm field="amount">
    <Form defaultValues={{ amount: 100, recurring: false }} onSubmit={nextStep}>
      {({ submitForm }) => {
        return (
          <form className={className} onSubmit={submitForm}>
            <h5>Select an amount:</h5>
            <AmountSelector value={100} />
            <br />

            <Checkbox fieldName="recurring" toggle={setRecurring}>
              Yes! Show my support by making this a recurring donation.
            </Checkbox>
            <h5>{JSON.stringify(values)}</h5>

            <div id="Donate_Next">
              <button type="submit" id="Donate_NextButton">
                NEXT
              </button>
            </div>
          </form>
        );
      }}
    </Form>
  </NestedForm>
);
