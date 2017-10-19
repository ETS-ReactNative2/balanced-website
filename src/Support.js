import React from 'react';
import SectionHeader from './SectionHeader';
import BodyText from './BodyText';

import './Support.css';

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
        organizations like the <strong>Obesity Action Coalition</strong><sup><a href="http://www.obesityaction.org/educational-resources/resource-articles-2/nutrition/rethink-your-plate" target="_blank">1</a></sup> and{' '}
        <strong>The Defeat Diabetes Foundation</strong><sup><a href="https://www.defeatdiabetes.org/myplate/" target="_blank">2</a></sup>
        , and leading health care providers like{' '}
        <strong>Kaiser Permanente</strong><sup><a href="https://share.kaiserpermanente.org/wp-content/uploads/2015/10/The-Plant-Based-Diet-booklet.pdf" target="_blank">3</a></sup> and <strong>The Mayo Clinic</strong><sup><a href="http://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/dietary-guidelines/art-20045584" target="_blank">4</a></sup>
        .
      </BodyText>
      <div className="Support_logos">
        <a href="http://www.obesityaction.org" target="_blank"><img alt="OAC Logo" src={OAC} /></a>
        <a href="https://www.defeatdiabetes.org" target="_blank"><img alt="Defeat Diabetes Logo" src={DefeatDiabetes} /></a>
        <a href="http://www.mayoclinic.org/" target="_blank"><img alt="Mayo Clinic Logo" src={Mayo} /></a>
        <a href="https://share.kaiserpermanente.org" target="_blank"><img alt="Kaiser Permente Logo" src={KaiserPermanente} /></a>
      </div>
    </div>
  </div>;
