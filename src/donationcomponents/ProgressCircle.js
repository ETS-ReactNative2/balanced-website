import React from 'react';
import './ProgressCircle.css';
//import SectionHeader from './SectionHeader';
//import BodyText from './BodyText';

export default (props) =>
  <div className={"circle " + (props.active ? "active" : "inactive")}>
    {props.label}
  </div>;
