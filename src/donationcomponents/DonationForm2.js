import React from 'react';

import './DonationForm.css';

export default () => (
  <div className="DonateForm_Container">
    <form>
      <div className="DonateForm_InputContainer">
        <h1>Contact Information</h1>
        <input placeholder="First name" type="text" className="DonateForm_Input" />
        <input placeholder="Last name" type="text" className="DonateForm_Input" />
        <input placeholder="Email" type="text" className="DonateForm_Input" />
        <input placeholder="Phone" type="text" className="DonateForm_Input" />
        <h1>Billing Information</h1>
        <input placeholder="Address" type="text" className="DonateForm_Input" />
        <input placeholder="Address 2" type="text" className="DonateForm_Input" />
        <input placeholder="Address 3" type="text" className="DonateForm_Input" />
        <input placeholder="City" type="text" className="DonateForm_Input" />
        <input placeholder="State" type="text" className="DonateForm_Input" />
        <input placeholder="Zip Code" type="text" className="DonateForm_Input" />
        <input placeholder="Country" type="text" className="DonateForm_Input" />
      </div>

      <div className="DonateForm_ButtonGroup">
        <button type="button" className="DonateForm_Button">BACK</button>
        <button type="button" className="DonateForm_Button Next_Button">NEXT</button>
      </div>
    </form>
  </div>
)
