import React from 'react';
import {THEME_GREY, WHITE, LIGHT_GREY} from './colours';

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
};
import logo from './logo.png';

export default () => (
  <div style={styles.navBar}>
    <div style={styles.innerContainer}>
      <img alt="Balanced Logo" src={logo} />
    </div>
    <div style={styles.innerContainer}>
      <i style={styles.activeIcon} className="fa fa-bars" />
      <i style={styles.inactiveIcon} className="fa fa-facebook" />
      <i style={styles.inactiveIcon} className="fa fa-twitter" />
    </div>
  </div>
);
