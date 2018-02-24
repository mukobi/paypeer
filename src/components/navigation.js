import React from 'react';
import { NavLink } from 'react-router-dom';
import '../images/paypeer_logo.png';

// The Header creates links that can be used to navigate
// between routes.
const Navigation = () => (
  <header className="b-sidebar">
    <div className="logo">
      <a href="https://ethanls7.wixsite.com/paypeer"><img src={'./images/paypeer_logo.png'} /></a>
      </div>
    <div className="nav-icon">
      <NavLink to='/dashboard' activeClassName="active"><i className="fas fa-chart-line" /></NavLink>
    </div>
    <div className="nav-icon">
      <NavLink to='/exchange' activeClassName="active"><i className="fas fa-exchange-alt" /></NavLink>
    </div>
    <div className="nav-icon">
      <NavLink to='/send' activeClassName="active"><i className="fas fa-share" /></NavLink>
    </div>
    <div className="nav-icon">
      <NavLink to='/account' activeClassName="active"><i className="fas fa-cogs" /></NavLink>
    </div>
    <div className="nav-icon">
      <NavLink to='/info' activeClassName="active"><i className="fas fa-info" /></NavLink>
    </div>
    <div className="nav-icon">
    <a href="https://ethanls7.wixsite.com/paypeer"><i className="fas fa-sign-out-alt" /></a></div>
  </header>
)

export default Navigation
