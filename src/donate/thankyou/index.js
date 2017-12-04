import React from "react";
import "./index.css";

const getValue = (values, prop) => values && values.info && values.info[prop];

const ThankYou = ({ values }) => (
  <div id="Donate_Thankyou_Outer">
    <div id="Donate_Thankyou_Inner">
      <h2>Keep up to date with Balanced!</h2>
      <p>
        Learn more about the ways you can help in the fight to make healthy
        foods accessible to everyone by joining our mailing list.
      </p>
      <br />
      <form
        action="//balanced.us15.list-manage.com/subscribe/post?u=50ab50482b578b0fd8a221a3b&amp;id=54fab7dfe2"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        noValidate
        className="Signup_FormContainer"
      >
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            className="Signup_Input"
            placeholder="FIRST NAME"
            type="text"
            name="FNAME"
            value={getValue(values, "first_name")}
          />
          <input
            className="Signup_Input"
            placeholder="LAST NAME"
            type="text"
            name="LNAME"
            value={getValue(values, "last_name")}
          />
          <input
            className="Signup_Input"
            placeholder="EMAIL ADDRESS"
            type="text"
            name="EMAIL"
            value={getValue(values, "email")}
          />
          <input
            type="text"
            name="b_50ab50482b578b0fd8a221a3b_10e3f4718d"
            tabIndex="-1"
            value=""
          />
        </div>
        <button type="submit">JOIN NOW</button>
      </form>
    </div>
  </div>
);

export default ThankYou;
