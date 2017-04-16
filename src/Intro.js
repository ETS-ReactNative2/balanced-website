import React from 'react';
import * as styles from './styles';
import {THEME_GREEN} from './colours';

const style = {
  outerContainer: {
    marginTop: '110px',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Open Sans, sans-serif',
    color: THEME_GREEN,
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: '50px',
    fontSize: '30px',
    marginBottom: 67,
  },
  subheader: {
    margin: 0,
    fontFamily: 'Open Sans, sans-serif',
    textAlign: 'center',
    lineHeight: '40px',
    fontSize: '25px',
    fontWeight: 400,
    paddingLeft: 67,
    paddingRight: 67,
  },
};

export default () => (
  <div style={style.outerContainer}>
    <div style={styles.innerContainer}>
      <h1 style={style.header}>
        For too long, too many major food corporations have prioritized their profits over our health.
        They’ve ignored federal dietary guidelines and the best nutrition evidence, and our families have paid the price—with
        diabetes, high blood pressure, heart disease, and premature death.
      </h1>
      <h2 style={style.subheader}>
        These companies have created a public health crisis and blamed it on us, just like big tobacco did two generations ago.
        Like big tobacco, they’ve called consumer health an individual choice—not a corporate responsibility.
        The truth is, we’ve been set up to fail. When cafeterias, restaurants, and grocery aisles are overstocked with
        disease-causing foods, when major food corporations are promoting these products at every turn and piling them
        high on our plates, how much choice do we really have?
      </h2>
    </div>
  </div>
);
