import React from 'react';
import { Link } from 'react-router-dom';
import '../images/paypeer_logo.png';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="b-sidebar">
    <div className="logo"><Link to='/dashboard'><img src={'./images/paypeer_logo.png'} /></Link></div>
    <div className="nav-icon"><Link to='/dashboard'><i className="fas fa-chart-line" /></Link></div>
    <div className="nav-icon"><Link to='/exchange'><i className="fas fa-exchange-alt" /></Link></div>
    <div className="nav-icon"><Link to='/send'><i className="fas fa-share" /></Link></div>
    <div className="nav-icon"><Link to='/account'><i className="fas fa-cogs" /></Link></div>
    <div className="nav-icon">
      <Link to='/info'><div><i className="fas fa-info" /></div></Link>
      <Link to='/exit'><div><i className="fas fa-sign-out-alt" /></div></Link>
    </div>
  </header>
)

export default Header
