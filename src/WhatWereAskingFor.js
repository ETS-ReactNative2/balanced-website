import React from 'react';
import SectionHeader from './SectionHeader';
import BodyText from './BodyText';
import './what_were_asking_for.css';

export default () => (
  <div id="WhatWereAskingFor_Container">
    <div id="WhatWereAskingFor_InnerContainer">
      <div id="WhatWereAskingFor_TextContainer">
        <SectionHeader>
          WHAT WE'RE ASKING<br />
          FOR IS SIMPLE
        </SectionHeader>
        <BodyText>
          Food companies should sell food that reflects federal dietary
          guidelines and the best nutrition evidence. That means
          more whole grains, beans, vegetables and fruits, and fewer
          servings of foods high in saturated fat, cholesterol and carcinogens, such as meat and eggs.
        </BodyText>
      </div>
    </div>
  </div>
);
