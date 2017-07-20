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

function stepForward() {
  return FormStep=FormStep+1;
  console.log(FormStep);
}

export default () => (

  <div id="DonationBox_Container">
    <ProgressBar />
    {RenderForm()}
  </div>

)

/*
So what I’d do is turn `DonationBox` into a class. Have the state live there, plus two methods:

nextStep()
previousStep()

Then pass nextStep() and previousStep() down to the `DonationForm` components. Then you can use the `prop` `onPress`

class DonationBox {
  someMethod() {
    alert(‘hey’);
}

render () {
  return <DonationForm onPress={() => this.someMethod()} />
}}


When you put a function inside of a class it becomes a `method`. A `method` has access to the `this` variable of its surrounding `class`
This is important if you’re going to be using `this.state` or `this.setState`
*/


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
