import React from 'react';
import './NavMenu.css';
import $ from 'jquery';
import 'jquery.scrollto';

const navigateTo = (anchorName, hideNavBar) => {
  hideNavBar();
  const element = document.getElementById(anchorName + '_Container');
  $(window).scrollTo(element, { duration: 500 });
};

const NavMenu = ({ onClick }) => (
  <div id="NavBar_NavMenu">
    <ul>
      <li onClick={() => navigateTo('About', onClick)}>ABOUT</li>
      <li onClick={() => navigateTo('Signup', onClick)}>JOIN</li>
      <li onClick={() => navigateTo('OurStory', onClick)}>OUR STORY</li>
      <li onClick={() => navigateTo('AdvisoryBoard', onClick)}>
        ADVISORY BOARD
      </li>
      <li onClick={() => navigateTo('Donate', onClick)}>DONATE</li>
      <li onClick={() => (window.location = 'https://www.balanced.org/bpa')}>
        BALANCED PLATE ALLIANCE
      </li>
    </ul>
  </div>
);

export default NavMenu;
