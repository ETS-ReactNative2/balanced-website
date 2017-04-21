import React from 'react';
import {THEME_GREY, WHITE, LIGHT_GREY} from './colours';
import './NavBar.css';
import NavMenu from './NavMenu';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
        <div id="NavBar_Container">
          <div className="NavBar_InnerContainer">
            <img className="NavBar_Logo" alt="Balanced Logo" src={logo} />
          </div>
          <div className="NavBar_InnerContainer">
            <i
              onClick={() => this.toggleShowOurStory()}
              className="fa fa-bars NavBar_ActiveIcon"
            />
            <a href="https://www.facebook.com/GetBalancedNow/" target="_blank">
              <i className="fa fa-facebook NavBar_InactiveIcon" />
            </a>
            <a href="https://twitter.com/getbalanced_now" target="_blank">
              <i className="fa fa-twitter NavBar_InactiveIcon" />
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
