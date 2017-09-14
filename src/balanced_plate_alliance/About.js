import React from 'react';
import './About.css';

import what from './what.png';
import why from './why.png';
import how from './how.png';

const ICONS = {
  what,
  why,
  how,
};

console.log(ICONS);

const AboutItem = ({ icon, header, text }) => (
  <div className="AboutItem">
    <img className="Icon" alt="header" src={ICONS[icon]} />
    <h1>{header}</h1>
    <p>{text}</p>
  </div>
);

export default () => (
  <div id="About">
    <AboutItem
      icon="what"
      header="WHAT IS THE BALANCED PLATE ALLIANCE?"
      text="A group of dedicated advocates - just like you - who are committed to holding food companies and institutions accountable for prioritizing public health over corporate profit."
    />
    <AboutItem
      icon="how"
      header="HOW DOES IT WORK?"
      text="A few times a week, action alerts are sent directly to your inbox outlining simple actions you can take from your computer or phone to hold food companies accountable. These easy-to-complete actions include things like signing a petition, sending a tweet, or emailing company leaders."
    />
    <AboutItem
      icon="why"
      header="WHY SHOULD YOU JOIN?"
      text="The Balanced Plate Alliance is the fastest, easiest, highest-impact way to take action and demand healthier options for yourself, your children, and your family. Changing the menus in schools, hospitals, cafeterias, and stores will require every one of us to get involved and stand up for healthier food options. We can't do this lifesaving work without your support!"
    />
  </div>
);
