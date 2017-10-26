import React from "react";
import { NestedForm, Form, Text, TextArea } from "react-form";

import Checkbox from "../Checkbox";
import "./index.css";

const getAmount = ({ Amount }) => (Amount && Amount.amount) || 100;

const Payment = ({ nextStep, previousStep, amount, values }) => (
  <NestedForm field="payment">
    <Form onSubmit={nextStep} values={{ offset: false }}>
      {({ submitForm }) => {
        return (
          <form id="Donate_Payment">
            <h5>Payment Information</h5>
            <Text field="first_name" placeholder="Name on card" />
            <Text field="last_name" placeholder="Card Type" />
            <Text field="card_number" placeholder="Card Number" />
            <div id="Donate_SmallFields">
              <Text
                className="Donate_Month"
                field="month"
                type="number"
                placeholder="MM"
              />
              <Text
                className="Donate_Year"
                field="year"
                type="number"
                placeholder="YYYY"
              />
              <Text
                className="Donate_CVV"
                field="cvv"
                type="number"
                placeholder="CVV"
              />
            </div>

            <h5>Do you want to increase your impact?</h5>
            <Checkbox fieldName="offset">
              Yes! Add (TODO) to help offset bank fees.
            </Checkbox>

            <h5>Comment</h5>
            <TextArea field="name" placeholder="Leave a note" rows={5} />

            <div id="Donate_FinalAmount">
              <span>Amount:</span>
              <h5>${getAmount(values)}</h5>
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
  </NestedForm>
);

export default Payment;
