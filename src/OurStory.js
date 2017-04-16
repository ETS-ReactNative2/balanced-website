import React from 'react';
import BodyText from './BodyText';
import SectionHeader from './SectionHeader';
import './OurStory.css';

export default () => (
  <div id="OurStory_outerContainer">
    <div id="OurStory_innerContainer">
      <SectionHeader>OUR STORY</SectionHeader>
      <div id="textContainer">
        <BodyText textAlign="left">
          Becoming a mom changed a lot for me. The clothes I wear. The car I drive.
          The amount of sleep I get (or, more accurately, don’t get). But what it changed
          most is how I think about food.
        </BodyText>
        <BodyText textAlign="left">
          My two year old daughter Ada means the world to me, and like many moms
          I try my best to keep her healthy. But  I’ve learned just how difficult it
          can be to actually make that happen in a world where so much of the food
          available is so bad for us.
        </BodyText>
      </div>
      <span id="readMore">READ MORE <i className="fa fa-chevron-down" /></span>
    </div>
  </div>
);
