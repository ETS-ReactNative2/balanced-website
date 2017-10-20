import React from "react";
import aramark from "./aramark.png";
import elior from "./elior.png";

import "./Campaigns.css";

export default () => (
  <div id="Campaigns">
    <h1>CURRENT CAMPAIGNS</h1>
    <a href="https://www.droparamark.com/">
      <img alt="Aramark Logo" src={aramark} />
    </a>
    <a href="https://dropelior.com/">
      <img alt="Elior Logo" src={elior} />
    </a>
  </div>
);
