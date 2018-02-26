import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Navigation from './components/navigation';
import Main from './main'

import './res/fontawesome/css/fontawesome.min.css'
import './res/fontawesome/css/fa-solid.min.css'
import './style/main.css'
import './style/navigation.css'

const App = () => (
  <div>
    <Navigation />
    <Main />
  </div>
)

export default App
