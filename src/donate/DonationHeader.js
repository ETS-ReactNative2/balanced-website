import React from "react";
import "./DonationHeader.css";

const TITLES = ["", "Amount", "Info", "Payment"];

const Step = ({ step, selected }) => (
  <div className="Donate_Step">
    <div
      className={`Donate_StepNumber ${
        selected ? "Donate_StepNumberSelected" : ""
      }`}
    >
      {step}
    </div>
    <span className="Donate_StepTitle">{TITLES[step]}</span>
  </div>
);

const ThankyouHeader = () => (
  <div id="Donate_DonationHeader">
    <h2>THANK YOU!</h2>
    <span>Your support is greatly appreciated.</span>
  </div>
);

const StepHeader = ({ currentStep }) => (
  <div id="Donate_DonationHeader">
    <h5>DONATE TODAY</h5>
    <div id="Donate_Line" />
    <div id="Donate_Steps">
      <Step step={1} selected={currentStep + 1 === 1} />
      <Step step={2} selected={currentStep + 1 === 2} />
      <Step step={3} selected={currentStep + 1 === 3} />
    </div>
  </div>
);

export default props =>
  props.currentStep === 3 ? <ThankyouHeader /> : <StepHeader {...props} />;
