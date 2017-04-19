import React from 'react';
import {THEME_GREY, WHITE, LIGHT_GREY} from './colours';
import './NavBar.css';
import NavMenu from './NavMenu';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
            <a href="https://www.facebook.com/GetBalancedNow/" target="_blank">
              <i style={styles.inactiveIcon} className="fa fa-facebook" />
            </a>
            <a href="https://twitter.com/getbalanced_now" target="_blank">
              <i style={styles.inactiveIcon} className="fa fa-twitter" />
            </a>
          </div>
        </div>
        <CSSTransitionGroup
          transitionName="NavBar_Transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {showNavMenu && <NavMenu onClick={() => this.toggleShowOurStory()} />}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default NavBar;
