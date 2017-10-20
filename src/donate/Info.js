import React from "react";

const Info = ({ nextStep, previousStep, updateForm }) => (
  <div id="Donate_Info">
    <form>
      <h5>Contact Information</h5>
      <input
        onChange={updateForm("first_name")}
        type="text"
        placeholder="First name"
      />
      <input
        onChange={updateForm("last_name")}
        type="text"
        placeholder="Last name"
      />
      <input onChange={updateForm("email")} type="text" placeholder="Email" />
      <input onChange={updateForm("phone")} type="text" placeholder="Phone" />

      <h5>Billing Information</h5>
      <input
        onChange={updateForm("address")}
        type="text"
        placeholder="Address"
      />
      <input
        onChange={updateForm("address_2")}
        type="text"
        placeholder="Address 2"
      />
      <input
        onChange={updateForm("address_3")}
        type="text"
        placeholder="Address 3"
      />
      <input onChange={updateForm("city")} type="text" placeholder="City" />
      <input onChange={updateForm("state")} type="text" placeholder="State" />
      <input onChange={updateForm("zip")} type="text" placeholder="Zip Code" />
      <input
        onChange={updateForm("country")}
        type="text"
        placeholder="Country"
      />
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
