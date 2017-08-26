import React from 'react';
import SectionHeader from './SectionHeader';
import BodyText from './BodyText';

import './Support.css';

import AHA from './AHA.png';
import OAC from './OAC.png';
import DefeatDiabetes from './Defeat Diabetes.png';
import Mayo from './Mayo.png';
import KaiserPermanente from './Kaiser Permanente.png';

export default () =>
  <div id="Support_OuterContainer">
    <div id="Support_InnerContainer">
      <SectionHeader>WE ALREADY HAVE THE SUPPORT</SectionHeader>
      <BodyText>
        This common sense change is supported by an array of public health
        organizations like the <strong>Obesity Action Coalition</strong><sup><a href="http://www.obesityaction.org/educational-resources/resource-articles-2/nutrition/rethink-your-plate">1</a></sup> and{' '}
        <strong>The Defeat Diabetes Foundation</strong><sup><a href="https://www.defeatdiabetes.org/myplate/">2</a></sup>
        , and leading health care providers like{' '}
        <strong>Kaiser Permanente</strong><sup><a href="https://share.kaiserpermanente.org/wp-content/uploads/2015/10/The-Plant-Based-Diet-booklet.pdf">3</a></sup> and <strong>The Mayo Clinic</strong><sup><a href="http://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/dietary-guidelines/art-20045584">4</a></sup>
        .
      </BodyText>
      <div className="Support_logos">
        <img src={OAC} />
        <img src={DefeatDiabetes} />
        <img src={Mayo} />
        <img src={KaiserPermanente} />
      </div>
    </div>
  </div>;
