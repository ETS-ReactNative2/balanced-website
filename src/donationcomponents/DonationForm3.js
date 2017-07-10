import React from 'react';
import './DonationForm.css';

export default () => (
  <div className="DonateForm_Container">
    <form>

      <div className="DonateForm_InputContainer">
        <h1>Payment Information</h1>
        <input placeholder="Name on card" type="text" className="DonateForm_Input" required="true"/>
        <input placeholder="Card Type" type="text" className="DonateForm_Input" />
        <input placeholder="Card Number" type="text" className="DonateForm_Input" />
        <input placeholder="Exp" type="text" className="DonateForm_Input" />
        <input placeholder="Security code" type="text" className="DonateForm_Input" />



        <div className="DonateForm_Checkbox">
          <h1>Do you want to increase your impact?</h1>
          <input type="checkbox" id="recurringDonation" name="recurringDonation" />
            <label for="recurring">Yes! Add (%) to help offset bank fees.</label>
        </div>


        <div id="DonateForm_Checkbox">
          <h1>Comment</h1>
          <textarea
            className="DonateForm_Input DonateForm_Comment"
            placeholder="Leave a note"
          />
        </div>

      </div>



      <div className="DonateForm_ButtonGroup DonateForm_Nav">
        <button type="button" className="DonateForm_Button">BACK</button>
        <button type="button" className="DonateForm_Button Next_Button">NEXT</button>
      </div>

    </form>
  </div>
)
