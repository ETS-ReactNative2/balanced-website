import React from "react";
import { Form, Text } from "react-form";

import Checkbox from "../Checkbox";
import "./index.css";

const Payment = ({ nextStep, previousStep }) => (
  <Form onSubmit={nextStep}>
    {({ submitForm }) => {
      return (
        <form id="Donate_Payment">
          <h5>Payment Information</h5>
          <Text field="first_name" placeholder="Name on card" />
          <Text field="last_name" placeholder="Card Type" />
          <Text field="email" placeholder="Card Number" />
          <div id="Donate_SmallFields">
            <Text
              className="Donate_Month"
              field="email"
              type="number"
              placeholder="MM"
            />
            <Text
              className="Donate_Year"
              field="email"
              type="number"
              placeholder="YYYY"
            />
            <Text
              className="Donate_CVV"
              field="email"
              type="number"
              placeholder="CVV"
            />
          </div>

          <h5>Do you want to increase your impact?</h5>
          <Checkbox>Yes! Add (TODO) to help offset bank fees.</Checkbox>

          <h5>Comment</h5>
          <textarea placeholder="Leave a note" rows={5} />

          <div id="Donate_FinalAmount">
            <span>Amount:</span>
            <h5>$0.00</h5>
          </div>

          <div id="Donate_Next">
            <div onClick={previousStep} id="Donate_BackButton">
              BACK
            </div>
            <div onClick={nextStep} id="Donate_NextButton">
              NEXT
            </div>
          </div>
        </form>
      );
    }}
  </Form>
);

export default Payment;
