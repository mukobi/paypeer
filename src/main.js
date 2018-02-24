import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard';
import Exchange from './pages/exchange';
import Send from './pages/send';
import Account from './pages/account';
import Info from './pages/info';
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route exact path='/exchange' component={Exchange}/>
      <Route exact path='/send' component={Send}/>
      <Route exact path='/account' component={Account}/>
      <Route exact path='/info' component={Info}/>
      <Route path='/' component={Dashboard}/>
    </Switch>
  </main>
)

export default Main