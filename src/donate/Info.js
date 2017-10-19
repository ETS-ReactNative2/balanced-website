import React from "react";

const Info = ({ nextStep, previousStep }) => (
  <div id="Donate_Info">
    <form>
      <h5>Contact Information</h5>
      <input name="first_name" type="text" placeholder="First name" />
      <input name="last_name" type="text" placeholder="Last name" />
      <input name="email" type="text" placeholder="Email" />
      <input name="phone" type="text" placeholder="Phone" />

      <h5>Billing Information</h5>
      <input name="address" type="text" placeholder="Address" />
      <input name="address_2" type="text" placeholder="Address 2" />
      <input name="address_3" type="text" placeholder="Address 3" />
      <input name="city" type="text" placeholder="City" />
      <input name="state" type="text" placeholder="State" />
      <input name="zip" type="text" placeholder="Zip Code" />
      <input name="country" type="text" placeholder="Country" />
    </form>

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

export default Info;
