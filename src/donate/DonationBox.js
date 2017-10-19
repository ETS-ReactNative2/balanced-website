import React from 'react';
import DonationHeader from './DonationHeader';
import DonationBody from './DonationBody';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      currentStep: 1,
      currentAmount: '$100',
      recurring: false,
    };
  }

  render() {
    const { currentStep, currentAmount, recurring } = this.state;
    return (
      <div id="Donate_DonationBox">
        <DonationHeader currentStep={currentStep} />
        <DonationBody currentAmount={currentAmount} recurring={recurring} />
      </div>
    );
  }
}
