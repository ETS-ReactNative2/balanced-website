import React from 'react';
import {THEME_GREY, WHITE, LIGHT_GREY} from './colours';
import './NavBar.css';

const styles = {
  navBar: {
    backgroundColor: THEME_GREY,
    height: 79,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  innerContainer: {
    display: 'flex',
    height: 79,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 17,
  },
  activeIcon: {
    fontSize: 33.85,
    color: WHITE,
    marginRight: 18,
  },
  inactiveIcon: {
    fontSize: 33.85,
    color: LIGHT_GREY,
    marginRight: 18,
  },
  logo: {
    width: 223,
    height: 53,
  },
};

import logo from './logo.png';

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

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavMenu: false,
    };
  }

  toggleShowOurStory() {
    const {showNavMenu} = this.state;
    this.setState({
      showNavMenu: !showNavMenu,
    });
  }

  render() {
    const {showNavMenu} = this.state;

    return (
      <div>
        <div style={styles.navBar}>
          <div style={styles.innerContainer}>
            <img style={styles.logo} alt="Balanced Logo" src={logo} />
          </div>
          <div style={styles.innerContainer}>
            <i
              onClick={() => this.toggleShowOurStory()}
              style={styles.activeIcon}
              className="fa fa-bars"
            />
            <i style={styles.inactiveIcon} className="fa fa-facebook" />
            <i style={styles.inactiveIcon} className="fa fa-twitter" />
          </div>
        </div>
        {showNavMenu && <NavMenu onClick={() => this.toggleShowOurStory()} />}
      </div>
    );
  }
}

export default NavBar;
