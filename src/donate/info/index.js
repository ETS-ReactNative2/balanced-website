import React from "react";
import { NestedForm, Form, Text } from "react-form";
import validations from "./validations";
import "./index.css";
import Error from "../Error";

const Info = ({ previousStep, nextStep, values }) => (
  <NestedForm field="info">
    <Form validateError={validations} onSubmit={nextStep}>
      {({ submitForm, errors, touched }) => {
        return (
          <form id="Donate_Info" onSubmit={submitForm}>
            <h5>Contact Information</h5>
            <div className="Donate_FormGroup">
              <Text field="first_name" placeholder="First name" />
              <Text field="last_name" placeholder="Last name" />
              <Text field="email" placeholder="Email" />
              <Text field="phone" placeholder="Phone" />
            </div>

            <h5>Billing Information</h5>
            <div className="Donate_FormGroup">
              <Text field="address" placeholder="Address" />
              <Error errors={errors} touched={touched} fieldName={"address"} />

              <Text field="address_2" placeholder="Address 2" />

              <Text field="address_3" placeholder="Address 3" />

              <Text field="city" placeholder="City" />
              <Error errors={errors} touched={touched} fieldName={"city"} />

              <Text field="state" placeholder="State" />
              <Error errors={errors} touched={touched} fieldName={"state"} />

              <Text field="zip" placeholder="Zip Code" />
              <Error errors={errors} touched={touched} fieldName={"zip"} />

              <Text field="country" placeholder="Country" />
              <Error errors={errors} touched={touched} fieldName={"country"} />
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
