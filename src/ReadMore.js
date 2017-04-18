import React from 'react';
import './ReadMore.css';
export default ({onClick}) => (
  <span onClick={onClick} className="ReadMore">
    READ MORE <i className="fa fa-chevron-down" />
  </span>
);
