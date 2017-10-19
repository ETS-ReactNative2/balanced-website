import React from "react";
import { Switch, Route } from "react-router";
import Amount from "./Amount";
import Info from "./Info";

import "./DonationBody.css";

export default ({ currentAmount, recurring, selectAmount, setRecurring }) => (
  <div id="Donate_DonationBody">
    <Switch>
      <Route path="/donate/info" component={Info} />
      <Route path="/" component={Amount} />
    </Switch>
  </div>
);
