import React from 'react';
import ReactDOM from 'react-dom';
import Dokusha from './Dokusha.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dokusha />, div);
});
