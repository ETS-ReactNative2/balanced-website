import React from "react";
import Checkbox from "./Checkbox";
import "./Payment.css";

const Payment = ({ nextStep, previousStep }) => (
  <div id="Donate_Payment">
    <form>
      <h5>Payment Information</h5>
      <input name="first_name" type="text" placeholder="Name on card" />
      <input name="last_name" type="text" placeholder="Card Type" />
      <input name="email" type="text" placeholder="Card Number" />
      <div>
        <input
          className="Donate_Month"
          name="email"
          type="number"
          placeholder="MM"
        />
        <input
          className="Donate_Year"
          name="email"
          type="number"
          placeholder="YYYY"
        />
      </div>
      <input
        className="Donate_CVV"
        name="email"
        type="number"
        placeholder="CVV"
      />

      <h5>Do you want to increase your impact?</h5>
      <Checkbox>Yes! Add (TODO) to help offset bank fees.</Checkbox>

      <h5>Comment</h5>
      <textarea placeholder="Leave a note" rows={5} />
    </form>

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
  </div>
);

export default Payment;
