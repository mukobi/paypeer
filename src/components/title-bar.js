import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/title-bar.css'

const TitleBar = () => (
  <div className="b-title-bar">
    <div className="logo">
      <img src={require('../images/paypeer_logo.png')} />
    </div>
    <div className="login">
      <div className="sign-in">
        <NavLink to='/sign-in'>Sign in</NavLink>
      </div>
      <div className="or">or</div>
      <div className="sign-up">
        <NavLink to='/sign-up' >Sign up</NavLink>
      </div>
    </div>
  </div>
);

export default TitleBar;
