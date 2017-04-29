import React from 'react';
import ReactDOM from 'react-dom';
import Dokusha from './Dokusha.js';
import { createStore } from 'redux';
import { mainReducer as reducers } from './reducers';
import * as initialState from './initialState';
import * as actions from './actions/index';
import './styles/index.css';

ReactDOM.render(
  <Dokusha />,
  document.getElementById('root')
);
