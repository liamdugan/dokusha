// Dokusha main reducers

import _ from 'lodash';
// import React from 'react';
// import * as initialState from '../initialState.js';

const mainReducer = (state, action) => {
  switch (action.type) {
  case 'LOGIN': {
    console.log("Logged in user: " + action.username);
    return _.assign({}, state, {loginSucceeded: true});
  }

  case 'LOGIN_ERROR': {
    console.log("Login Error");
    return _.assign({}, state, {loginFailed: true});
  }

  default: {
    // console.log("Hit the default");
    return state;
  }

  }
};

export { mainReducer }
