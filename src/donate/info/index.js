import React from "react";
import { NestedForm, Form } from "react-form";
import validations from "./validations";
import "./index.css";
import TextInput from "../TextInput";

const Info = ({ previousStep, nextStep, values }) => (
  <NestedForm field="info">
    <Form validateError={validations} onSubmit={nextStep}>
      {({ submitForm, errors, touched }) => {
        return (
          <form id="Donate_Info" onSubmit={submitForm}>
            <h5>Contact Information</h5>
            <div className="Donate_FormGroup">
              <TextInput field="first_name" placeholder="First name" />
              <TextInput field="last_name" placeholder="Last name" />
              <TextInput field="email" placeholder="Email" />
              <TextInput field="phone" placeholder="Phone" />
            </div>

            <h5>Billing Information</h5>
            <div className="Donate_FormGroup">
              <TextInput field="address" placeholder="Address" />

              <TextInput field="address_2" placeholder="Address 2" />

              <TextInput field="address_3" placeholder="Address 3" />

              <TextInput field="city" placeholder="City" />

              <TextInput field="state" placeholder="State" />

              <TextInput field="zip" placeholder="Zip Code" />

              <TextInput field="country" placeholder="Country" />
            </div>

            <span className="Donate_Encouragement">Almost done!</span>

            <div className="Donate_ButtonGroup">
              <button
                type="button"
                onClick={previousStep}
                className="Donate_Back"
              >
                BACK
              </button>
              <button type="submit">NEXT</button>
            </div>
          </form>
        );
      }}
    </Form>
  </NestedForm>
);

export default Info;
