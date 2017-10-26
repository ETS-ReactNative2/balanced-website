import React from "react";
import { NestedForm, Form, TextArea } from "react-form";

import validations from "./validations";
import Checkbox from "../Checkbox";
import Error from "../Error";
import TextInput from "../TextInput";

import "./index.css";

const getAmount = ({ amount }) =>
  amount &&
  amount.amount &&
  Number.isInteger(amount.amount) &&
  amount.amount.toFixed(2);

const Payment = ({ previousStep, amount, values }) => (
  <NestedForm field="payment">
    <Form
      validateError={validations}
      onSubmit={() => console.log(values)}
      defaultValues={{ offset: false }}
    >
      {({ submitForm, errors, touched }) => {
        return (
          <form id="Donate_Payment" onSubmit={submitForm}>
            <h5>Payment Information</h5>

            <div className="Donate_FormGroup">
              <TextInput field="name" placeholder="Name on card" />
              <Error errors={errors} touched={touched} fieldName={"name"} />

              <TextInput field="card_number" placeholder="Card Number" />
              <Error
                errors={errors}
                touched={touched}
                fieldName={"card_number"}
              />
            </div>

            <div className="Donate_SmallFields">
              <TextInput
                id="Donate_Month"
                field="month"
                type="number"
                placeholder="MM"
              />
              <TextInput
                id="Donate_Year"
                field="year"
                type="number"
                placeholder="YYYY"
              />
              <TextInput
                id="Donate_CVV"
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
            <TextArea field="note" placeholder="Leave a note" rows={5} />

            {getAmount(values) && (
              <div id="Donate_FinalAmount">
                <span>Amount:</span>
                <h5>${getAmount(values)}</h5>
              </div>
            )}

            <div className="Donate_ButtonGroup">
              <button
                type="button"
                onClick={previousStep}
                className="Donate_Back"
              >
                BACK
              </button>
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

export default Payment;
