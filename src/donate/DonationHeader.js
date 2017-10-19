import React from "react";
import "./DonationHeader.css";

const STEPS = [1, 2, 3];
const TITLES = ["", "Amount", "Info", "Payment"];

const Step = ({ step, selected }) => (
  <div className="Donate_Step">
    <div
      className={`Donate_StepNumber ${selected
        ? "Donate_StepNumberSelected"
        : ""}`}
    >
      {step}
    </div>
    <span className="Donate_StepTitle">{TITLES[step]}</span>
  </div>
);

export default ({ currentStep }) => (
  <div id="Donate_DonationHeader">
    <h5>DONATE TODAY</h5>
    <div id="Donate_Steps">
      {STEPS.map(s => (
        <Step key={s} step={s} selected={currentStep + 1 === s} />
      ))}
    </div>
    <div id="Donate_Line" />
  </div>
);
