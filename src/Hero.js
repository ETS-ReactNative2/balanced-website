import React from 'react';
import heroPhoto from './hero_photo.jpg';

import {WHITE} from './colours';
const width = window.innerWidth;
const isMobile = width <= 736;

const style = {
  heroContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: `url(${heroPhoto})`,
    height: 755,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    width: !isMobile && 1024,
    marginBottom: 88,
    alignItems: 'flex-start',
  },
  header: {
    maxWidth: 736,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    color: WHITE,
    letterSpacing: '0.1em',
    fontSize: 80.43,
    marginBottom: 42,
    lineHeight: '1em',
  },
  subheader: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    color: WHITE,
    letterSpacing: '0.1em',
    fontSize: 33.62,
    margin: 0,
  },
};

export default () => (
  <div style={style.heroContainer}>
    <div style={style.innerContainer}>
      <h1 style={style.header}>HEALTHY FOOD IS A RIGHT</h1>
      <h2 style={style.subheader}>AND WE'RE GOING TO FIGHT FOR IT</h2>
    </div>
  </div>
);
