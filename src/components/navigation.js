import React from 'react';
import { NavLink } from 'react-router-dom';


// The Header creates links that can be used to navigate
// between routes.
const Navigation = () => (
  <header className="b-sidebar">
    <div className="logo">
      <a href="https://ethanls7.wixsite.com/paypeer"><img src={require('../images/paypeer_logo.png')} /></a>
      </div>
    <div className="nav-icon">
      <NavLink to='/dashboard' activeClassName="active"><img src={require('../images/icons/dashboard.png')} /></NavLink>
    </div>
    <div className="nav-icon">
      <NavLink to='/exchange' activeClassName="active"><img src={require('../images/icons/exchange.png')} /></NavLink>
    </div>
    <div className="nav-icon">
      <NavLink to='/send' activeClassName="active"><img src={require('../images/icons/send.png')} /></NavLink>
    </div>
    <div className="nav-icon">
      <NavLink to='/account' activeClassName="active"><img src={require('../images/icons/account.png')} /></NavLink>
    </div>
    <div className="nav-icon">
      <NavLink to='/info' activeClassName="active"><img src={require('../images/icons/help.png')} /></NavLink>
    </div>
    <div className="nav-icon">
    <a href="https://ethanls7.wixsite.com/paypeer"><img src={require('../images/icons/logout.png')} /></a></div>
  </header>
)

export default Navigation
