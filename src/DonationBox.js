import React from 'react';
import './DonationBox.css';
import ProgressBar from './donationcomponents/ProgressBar';
import DonationForm1 from './donationcomponents/DonationForm1';
import DonationForm2 from './donationcomponents/DonationForm2';
import DonationForm3 from './donationcomponents/DonationForm3';
import DonationForm4 from './donationcomponents/DonationForm4';

function RenderForm() {
    if (FormStep===1) {
      return <DonationForm1 />
    }
    else if (FormStep===2) {
      return <DonationForm2 />
    }
    else if (FormStep===3) {
      return <DonationForm3 />
    }
    else {
      return <DonationForm4 />
    }
  };

var FormStep=1;


export default () => (

  <div id="DonationBox_Container">
    <ProgressBar />
    {RenderForm()}
  </div>

)



/* OLD FORM
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
