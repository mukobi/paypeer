import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navigation.css'

// The Header creates links that can be used to navigate
// between routes.
const Navigation = () => (
  <header className="b-sidebar">
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
  </header>
)

export default Navigation
