import React from 'react';
import {WHITE, THEME_GREEN} from './colours';
import './signup.css';

const style = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 120,
    paddingBottom: 108,
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
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: '0.1em',
    marginBottom: 56,
  },
};

export default () => (
  <div id="Signup_Container" style={style.container}>
    <h1 style={style.header}>ENOUGH IS ENOUGH</h1>
    <h2 style={style.subheader}>
      TOGETHER, WE WILL HOLD MAJOR FOOD CORPORATIONS ACCOUNTABLE
      FOR BRINGING BALANCE TO CAFETERIAS, MENUS AND STORE SHELVES
    </h2>
    <form
      action="//balanced.us15.list-manage.com/subscribe/post?u=50ab50482b578b0fd8a221a3b&amp;id=10e3f4718d"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
      className="Signup_FormContainer"
    >
      <div className="Signup_InputGroup">
        <input
          className="Signup_Input"
          style={style.input}
          placeholder="FIRST NAME"
          type="text"
          name="FNAME"
        />
        <input
          className="Signup_Input"
          style={style.input}
          placeholder="LAST NAME"
          type="text"
          name="LNAME"
        />
        <input
          className="Signup_Input"
          placeholder="EMAIL ADDRESS"
          type="text"
          name="EMAIL"
        />
      </div>
      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
        <input
          type="text"
          name="b_50ab50482b578b0fd8a221a3b_10e3f4718d"
          tabIndex="-1"
          value=""
        />
      </div>
      <input className="Signup_Button" type="submit" value="TAKE ACTION" />
    </form>

  </div>
);
