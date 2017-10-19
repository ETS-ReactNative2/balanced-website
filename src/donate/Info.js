import React from "react";
import { Link } from "react-router-dom";

const Info = () => (
  <div>
    <form>
      <h5>Contact Information</h5>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />

      <h5>Billing Information</h5>
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Address 2" />
      <input type="text" placeholder="Address 3" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="Zip Code" />
      <input type="text" placeholder="Country" />
    </form>

    <Link to="/donate/payment">NEXT</Link>
  </div>
);

export default Info;
