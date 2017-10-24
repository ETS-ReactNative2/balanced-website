import React from "react";
import { Form } from "react-form";

import Checkbox from "../Checkbox";
import AmountSelector from "./AmountSelector";
import "./index.css";

export default ({
  currentAmount,
  recurring,
  selectAmount,
  setRecurring,
  nextStep
}) => (
  <Form defaultValues={{ amount: 100, recurring: false }} onSubmit={nextStep}>
    {({ submitForm }) => {
      return (
        <form onSubmit={submitForm}>
          <h5>Select an amount:</h5>
          <AmountSelector value={100} />
          <br />

          <Checkbox checked={recurring} toggle={setRecurring}>
            Yes! Show my support by making this a recurring donation.
          </Checkbox>

          <div id="Donate_Next">
            <button type="submit" id="Donate_NextButton">
              NEXT
            </button>
          </div>
        </form>
      );
    }}
  </Form>
);
