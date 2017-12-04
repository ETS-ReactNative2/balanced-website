import React, { Component } from "react";
import { NestedForm, Form, TextArea } from "react-form";
import Halogen from "halogen";

import validations from "./validations";
import Checkbox from "../Checkbox";
import TextInput from "../TextInput";
import handleDonation from "../handleDonation";

import "./index.css";

const getAmount = ({ amount }) =>
  amount &&
  amount.amount &&
  Number.isInteger(amount.amount) &&
  amount.amount.toFixed(2);

const loadingStyle = {
  marginTop: "-4px",
  marginLeft: "25px",
  display: "flex",
  flex: "0 1 auto",
  flexDirection: "column",
  height: "25px",
  width: "25px",
  alignItems: "center",
  justifyContent: "center"
};

const DonateButton = ({ loading }) => {
  console.log("donate", loading);
  return loading ? (
    <div style={loadingStyle}>
      <Halogen.ClipLoader color="#4B991F" />
    </div>
  ) : (
    <button type="submit" id="Donate_NextButton">
      NEXT
    </button>
  );
};

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errorMessage: undefined
    };
  }

  donate = () => {
    console.log("Going");
    const go = new Promise((resolve, reject) => {
      setTimeout(resolve, 5000);
    });

    // handleDonation(this.values)
    go.then(this.successfulDonation).catch(this.failedDonation);
  };

  successfulDonation = () => {
    console.log("Successful");
    this.setState({ loading: false });
    this.props.nextStep();
  };

  failedDonation = error => {
    this.setState({
      error,
      loading: false
    });
  };

  render() {
    const { previousStep, values } = this.props;

    return (
      <NestedForm field="payment">
        <Form
          validateError={validations}
          onSubmit={this.donate}
          defaultValues={{ offset: false }}
        >
          {({ submitForm, errors, touched, submitted }) => {
            console.log("loading", submitted);
            return (
              <form id="Donate_Payment" onSubmit={submitForm}>
                <h5>Payment Information</h5>

                <div className="Donate_FormGroup">
                  <TextInput field="name" placeholder="Name on card" />

                  <TextInput field="card_number" placeholder="Card Number" />
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
                  <DonateButton loading={submitted} />
                </div>
              </form>
            );
          }}
        </Form>
      </NestedForm>
    );
  }
}

export default Payment;
