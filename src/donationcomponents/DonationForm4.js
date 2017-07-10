import React from 'react';
import './DonationForm.css';
import BodyText from '../BodyText';
import SectionHeader from '../SectionHeader';


export default () => (
  <div className="DonateForm_Container">
    <form>

      <div className="DonateForm_InputContainer">
        <h2>Keep up to date with Balanced!</h2>
        <p>Learn more about the ways you can help in the fight to make healthy foods accessible to everyone by signing up for our mailing list.</p>
        <input placeholder="Email" type="text" className="DonateForm_Input" />
      </div>

      <div className="DonateForm_ButtonGroup">
        <button type="button" className="DonateForm_Button">BACK</button>
        <button type="button" className="DonateForm_Button Next_Button">NEXT</button>
      </div>

    </form>
  </div>
)
