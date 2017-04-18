import React from 'react';
import './ReadMore.css';

const getIcon = toggled => (toggled ? 'fa-chevron-up' : 'fa-chevron-down');
const getText = toggled => (toggled ? 'HIDE' : 'READ MORE');

export default ({onClick, toggled}) => (
  <span onClick={onClick} className="ReadMore">
    {getText(toggled)} <i className={`fa ${getIcon(toggled)}`} />
  </span>
);
