import React from 'react';
import './DonationForm.css';


export default () => (
  <div className="DonateForm_Container">
    <form>

        <h1>Select an amount</h1>
        <div className="DonateForm_ButtonGroup">
          <button type="button" className="DonateForm_Button">$10</button>
          <button type="button" className="DonateForm_Button">$40</button>
          <button type="button" className="DonateForm_Button">$100</button>
          <button type="button" className="DonateForm_Button">$500</button>
          <button type="button" className="DonateForm_Button">OTHER</button>
        </div>

        <div className="DonateForm_Checkbox">
          <input type="checkbox" id="recurringDonation" name="recurringDonation" />
            <label for="recurring">Yes! Show my support by making this a recurring donation</label>
         </div>

         <div className="DonateForm_ButtonGroup">
           <button type="button" className="DonateForm_Button Next_Button">NEXT</button>
         </div>

    </form>
  </div>
)
