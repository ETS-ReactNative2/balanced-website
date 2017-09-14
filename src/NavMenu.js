import React from 'react';
import { Link } from 'react-router-dom';
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
      <li onClick={() => navigateTo('About', onClick)}>
        <Link to="/">ABOUT</Link>
      </li>
      <li onClick={() => navigateTo('Signup', onClick)}>
        <Link to="/">JOIN</Link>
      </li>
      <li onClick={() => navigateTo('OurStory', onClick)}>
        <Link to="/">OUR STORY</Link>
      </li>
      <li onClick={() => navigateTo('AdvisoryBoard', onClick)}>
        <Link to="/">ADVISORY BOARD</Link>
      </li>
      <li onClick={() => navigateTo('Donate', onClick)}>
        <Link to="/">DONATE</Link>
      </li>
      <li>
        <Link onClick={onClick} to="/bpa">
          BALANCED PLATE ALLIANCE
        </Link>
      </li>
    </ul>
  </div>
);

export default NavMenu;
