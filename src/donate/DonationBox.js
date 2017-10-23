import React from "react";
import DonationHeader from "./DonationHeader";
import DonationBody from "./DonationBody";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      currentStep: 0
    };
  }

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
    const { currentStep } = this.state;
    return (
      <div id="Donate_DonationBox">
        <DonationHeader currentStep={currentStep} />
        <DonationBody
          currentStep={currentStep}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
        />
      </div>
    );
  }
}
