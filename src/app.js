import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Navigation from './components/navigation';
import Main from './main'
import TitleBar from './components/title-bar';

import './res/fontawesome/css/fontawesome.min.css';
import './res/fontawesome/css/fa-solid.min.css';
import './style/main.css';

const App = () => (
  <div>
    <TitleBar />
    <Navigation />
    <Main />
  </div>
);

export default App;
