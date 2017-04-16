import React from 'react';
import './BodyText.css';

const getClassName = textAlign => {
  return 'BodyText ' + (textAlign === 'left' ? 'AlignLeft' : '');
};

export default ({children, textAlign}) => (
  <p className={getClassName(textAlign)}>{children}</p>
);
