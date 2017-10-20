import React from "react";
import DonationHeader from "./DonationHeader";
import DonationBody from "./DonationBody";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      currentStep: 0,
      currentAmount: 100,
      recurring: false
    };
  }

  selectAmount = amount => {
    this.setState({
      currentAmount: amount
    });
  };

  setRecurring = () => {
    this.setState({
      recurring: !this.state.recurring
    });
  };

  nextStep = () => {
    const currentStep = this.state.currentStep + 1;
    this.setState({
      currentStep
    });
  };

  previousStep = () => {
    const currentStep = this.state.currentStep - 1;
    this.setState({
      currentStep
    });
  };

  render() {
    const { currentStep, currentAmount, recurring } = this.state;
    return (
      <div id="Donate_DonationBox">
        <DonationHeader currentStep={currentStep} />
        <DonationBody
          currentStep={currentStep}
          currentAmount={currentAmount}
          recurring={recurring}
          selectAmount={this.selectAmount}
          setRecurring={this.setRecurring}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
        />
      </div>
    );
  }
}
