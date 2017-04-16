import React from 'react';
import SectionHeader from './SectionHeader';
import BodyText from './BodyText';
import './what_were_asking_for.css';

export default () => (
  <div id="outerContainer">
    <div id="innerContainer">
      <div id="textContainer">
        <SectionHeader>
          WHAT WE'RE ASKING
          FOR IS SIMPLE
        </SectionHeader>
        <BodyText>
          All they have to do is sell food that reflects federal dietary
          guidelines and the best nutrition evidence. That means
          more grains, beans, vegetables and fruits, and fewer
          servings of foods high in saturated fat, cholesterol and
          carcinogens, such as meat and eggs.
        </BodyText>
      </div>
    </div>
  </div>
);
