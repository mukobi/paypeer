import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faChartLine, faCogs, faShare, faSignOutAlt, faInfo } from '@fortawesome/fontawesome-free-solid'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="b-sidebar">
    <div className="nav-icon"><Link to='/dashboard'><FontAwesomeIcon icon={faChartLine} /></Link></div>
    <div className="nav-icon"><Link to='/exchange'><FontAwesomeIcon icon={faExchangeAlt} /></Link></div>
    <div className="nav-icon"><Link to='/send'><FontAwesomeIcon icon={faShare} /></Link></div>
    <div className="nav-icon"><Link to='/account'><FontAwesomeIcon icon={faCogs} /></Link></div>
    <div className="nav-icon">
      <Link to='/info'><FontAwesomeIcon icon={faInfo} /></Link>
      <Link to='/exit'><FontAwesomeIcon icon={faSignOutAlt} /></Link>
    </div>
  </header>
)

export default Header
