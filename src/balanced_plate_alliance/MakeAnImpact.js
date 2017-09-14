import React from 'react';
import './make_an_impact.png';
import './MakeAnImpact.css';
import check from './check.png';

const Item = ({ children }) => (
  <div className="Item">
    <img src={check} className="Check" />
    <span>{children}</span>
  </div>
);

export default () => (
  <div id="MakeAnImpact">
    <h1>MAKE AN IMPACT IN OUR:</h1>
    <div id="Items">
      <Item>SCHOOLS</Item>
      <Item>HOSPITALS</Item>
      <Item>COMMUNITIES</Item>
    </div>
  </div>
);
