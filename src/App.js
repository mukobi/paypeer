import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Navigation from './components/navigation';
import Main from './Main'

const App = () => (
  <div>
    <Navigation />
    <Main />
  </div>
)

export default App
