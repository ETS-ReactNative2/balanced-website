import React from 'react';
import Text from 'react';
import './DonationBox.css';
import ProgressBar from './donationcomponents/ProgressBar';
import SectionHeader from './SectionHeader';
import BodyText from './BodyText';

export default () => (
  <div id="DonationBox_Container">
    <ProgressBar />


    <div id="Donate_DonationBox">
      Select an amount
       <form>

         <div id="Donate_ButtonGroup">
           <button type="button" className="Donate_Button">$10</button>
           <button type="button" className="Donate_Button">$40</button>
           <button type="button" className="Donate_Button">$100</button>
           <button type="button" className="Donate_Button">$500</button>
           <button type="button" className="Donate_Button">OTHER</button>
         </div>

         <div id="Donate_DonationBoxInnerContainer">
           <div id="Donate_Currency">$</div>
           <input placeholder="45" type="text" id="Donate_Input" />
         </div>

       </form>

    </div>
  </div>

)

/*
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
*/
