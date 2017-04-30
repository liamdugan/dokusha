// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// App.test.js - allows for react-scripts hot reloading

import React from 'react';
import ReactDOM from 'react-dom';
import Dokusha from './Dokusha.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dokusha />, div);
});
