import React from 'react';
import './signup.css';
import './SignupForm.css';

export default () => (
  <div id="Signup_Container">
    <h1 id="Signup_Header">ENOUGH IS ENOUGH</h1>
    <h2 id="Signup_Subheader">
      TOGETHER, WE WILL HOLD MAJOR FOOD CORPORATIONS ACCOUNTABLE FOR BRINGING
      BALANCE TO CAFETERIAS, MENUS AND STORE SHELVES
    </h2>
    <form
      action="//balanced.us15.list-manage.com/subscribe/post?u=50ab50482b578b0fd8a221a3b&amp;id=54fab7dfe2"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      noValidate
      className="Signup_FormContainer"
    >
      <div className="Signup_InputGroup">
        <input
          className="Signup_Input"
          placeholder="FIRST NAME"
          type="text"
          name="FNAME"
        />
        <input
          className="Signup_Input"
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
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
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
