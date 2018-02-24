import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Navigation from './components/navigation';
import Main from './Main'

import './res/fontawesome/css/fontawesome.min.css'
import './res/fontawesome/css/fa-solid.min.css'
import './style/main.css'

const App = () => (
  <div>
    <Navigation />
    <div className="test" />
    <Main />
  </div>
)

export default App