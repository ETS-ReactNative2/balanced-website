import React from 'react';
import {WHITE, THEME_GREEN} from './colours';
import './signup.css';

const style = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 140,
    paddingBottom: 140,
    backgroundColor: THEME_GREEN,
  },
  header: {
    margin: 0,
    color: WHITE,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 40,
    letterSpacing: '.13em',
    textAlign: 'center',
  },
  subheader: {
    maxWidth: 716,
    color: WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: '0.1em',
    marginBottom: 56,
  },
};

export default () => (
  <div style={style.container}>
    <h1 style={style.header}>ENOUGH IS ENOUGH</h1>
    <h2 style={style.subheader}>
      TOGETHER, WE WILL HOLD MAJOR FOOD CORPORATIONS ACCOUNTABLE
      FOR BRINGING BALANCE TO CAFETERIAS, MENUS AND STORE SHELVES
    </h2>
    <form className="Signup_formContainer">
      <input
        style={style.input}
        placeholder="FIRST + LAST NAME"
        type="text"
        name="firstAndLastName"
      />
      <input placeholder="EMAIL ADDRESS" type="text" name="email" />
    </form>

    <button type="button">TAKE ACTION</button>

  </div>
);
