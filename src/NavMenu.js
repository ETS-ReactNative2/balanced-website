import React from 'react';
import './NavMenu.css';

const navigateTo = (anchorName, toggleShowOurStory) => {
  toggleShowOurStory();
  const element = document.getElementById(anchorName + '_Container');
  element.scrollIntoView({
    behavior: 'smooth',
  });
};

const NavMenu = ({onClick}) => (
  <div id="NavBar_NavMenu">
    <ul>
      <li onClick={() => navigateTo('About', onClick)}>ABOUT</li>
      <li onClick={() => navigateTo('Signup', onClick)}>JOIN</li>
      <li onClick={() => navigateTo('OurStory', onClick)}>OUR STORY</li>
      <li onClick={() => navigateTo('AdvisoryBoard', onClick)}>
        ADVISORY BOARD
      </li>
      <li onClick={() => navigateTo('Donate', onClick)}>
        DONATE
      </li>
    </ul>
  </div>
);

export default NavMenu;
