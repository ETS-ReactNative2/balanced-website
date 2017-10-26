import React from "react";
import { NestedForm, Form, Text } from "react-form";
import "./index.css";

const Info = ({ nextStep, previousStep, values }) => (
  <NestedForm field="info">
    <Form onSubmit={nextStep}>
      {({ submitForm }) => {
        return (
          <form id="Donate_Info">
            <h5>Contact Information</h5>
            <Text field="first_name" placeholder="First name" />
            <Text field="last_name" placeholder="Last name" />
            <Text field="email" placeholder="Email" />
            <Text field="phone" placeholder="Phone" />

            <h5>Billing Information</h5>
            <Text field="address" placeholder="Address" />
            <Text field="address_2" placeholder="Address 2" />
            <Text field="address_3" placeholder="Address 3" />
            <Text field="city" placeholder="City" />
            <Text field="state" placeholder="State" />
            <Text field="zip" placeholder="Zip Code" />
            <Text field="country" placeholder="Country" />

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

export default Info;
