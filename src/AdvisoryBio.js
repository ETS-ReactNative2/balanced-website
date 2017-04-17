import React from 'react';
import BodyText from './BodyText';
import './AdvisoryBio.css';

export default ({name}) => (
  <div id="AdvisoryBio_Container">
    <BodyText>{name}</BodyText>
    <i className="fa fa-envelope AdvisoryBio_EmailIcon" />
  </div>
);
