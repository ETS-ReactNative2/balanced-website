import React from 'react';
import BodyText from './BodyText';
import './AdvisoryBio.css';
import { BIOS } from './advisory_board_constants';

export default ({ selectedName }) => (
  <div id="AdvisoryBio_Container">
    {BIOS[selectedName].split('\n').map(text => <BodyText>{text}</BodyText>)}
  </div>
);
