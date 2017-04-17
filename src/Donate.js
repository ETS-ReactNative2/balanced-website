import React from 'react';
import './Donate.css';
import SectionHeader from './SectionHeader';
import BodyText from './BodyText';

export default () => (
  <div id="Donate_OuterContainer">
    <div id="Donate_InnerContainer">
      <SectionHeader>DONATE</SectionHeader>
      <BodyText>
        You can help us make healther food more <br />
        accessible by donating today!
      </BodyText>
      <div id="Donate_DonationBox">
        <form>
          <div id="Donate_DonationBoxInnerContainer">
            <div id="Donate_Currency">$</div>
            <input placeholder="45" type="text" id="Donate_Input" />
          </div>
          <div id="Donate_ButtonGroup">
            <button type="button" className="Donate_Button">MONTHLY</button>
            <button type="button" className="Donate_Button">MONTHLY</button>
          </div>
        </form>

      </div>
    </div>
  </div>
);
