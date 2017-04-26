import React from 'react';
import './Donate.css';
import SectionHeader from './SectionHeader';
import BodyText from './BodyText';

export default () => (
  <div id="Donate_Container">
    <div id="Donate_InnerContainer">
      <SectionHeader>DONATE</SectionHeader>
      <BodyText>
        You can help us make healthier food more <br />
        accessible by donating today!
      </BodyText>
      <div id="Donate_DonationBox">
        <form>
          <div id="Donate_DonationBoxInnerContainer">
            <div id="Donate_Currency">$</div>
            <input placeholder="45" type="text" id="Donate_Input" />
          </div>
          <div id="Donate_ButtonGroup">
            <a
              href="https://crm.bloomerang.co/HostedDonation?ApiKey=pub_dc454663-0e6f-11e7-bb7f-024e165d44b3&WidgetId=16384"
              target="_blank"
            >
              <button type="button" className="Donate_Button">MONTHLY</button>
            </a>
            <a
              href="https://crm.bloomerang.co/HostedDonation?ApiKey=pub_dc454663-0e6f-11e7-bb7f-024e165d44b3&WidgetId=16384"
              target="_blank"
            >
              <button type="button" className="Donate_Button">ONCE</button>
            </a>
          </div>
        </form>

      </div>
    </div>
  </div>
);
