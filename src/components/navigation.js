import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faChartLine, faCogs, faShare, faSignOutAlt, faInfo,  } from '@fortawesome/fontawesome-free-solid'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
        <div><Link to='/dashboard'>Dashboard</Link></div>
        <div><Link to='/exchange'>Exchange</Link></div>
        <div><Link to='/send'>Send</Link></div>
        <div><Link to='/account'>Account</Link></div>
        <div>
          <Link to='/info'>Info</Link>
          <Link to='/exit'>Exit</Link>
        </div>
    </nav>
  </header>
)

export default Header
