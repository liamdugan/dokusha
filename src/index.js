import React from 'react';
import ReactDOM from 'react-dom';
import Dokusha from './components/Dokusha.jsx';
import { createStore } from 'redux';
import { mainReducer as reducers } from './reducers';
import * as initialState from './initialState';
import './styles/index.css';

const store = createStore(reducers, initialState);

const dokusha = <Dokusha store={store}/>;

ReactDOM.render(
  dokusha,
  document.getElementById('root')
);
