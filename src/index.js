// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// index.js - Renders the main Dokusha react component

import React from 'react';
import ReactDOM from 'react-dom';
import Dokusha from './components/Dokusha.jsx';
import { createStore } from 'redux';
import { mainReducer as reducers } from './reducers';
import './styles/index.css';

const store = createStore(reducers);

const dokusha = <Dokusha store={store}/>;

ReactDOM.render(
  dokusha,
  document.getElementById('root')
);
