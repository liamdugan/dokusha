// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// reducers/index.js - Main reducer for the react events

import _ from 'lodash';

const mainReducer = (state, action) => {
  switch (action.type) {

  case 'FAILED_LOGIN':
    return _.assign({}, state, {
      loginSucceeded: false,
      loginFailed: true,
      signUpFailed: false
    });

  case 'LOGIN':
    return _.assign({}, state, {
      loginSucceeded: true,
      loginFailed: false,
      signUpFailed: false,
      profile: action.profile
    });

  case 'DUP_SIGNUP':
    return _.assign({}, state, {
      loginSucceeded: false,
      loginFailed: false,
      signUpFailed: true
    });

  case 'LOG_OUT':
    return _.assign({}, state, {
      loginSucceeded: false,
      loginFailed: false,
      signUpFailed: false
    });

  case 'BOOK_LOAD':
    return _.assign({}, state, {
      loginSucceeded: false,
      loginFailed: false,
      signUpFailed: false,
      books: action.books
    });

  case 'FAVORITE':
    return _.assign({}, state, {profile: action.profile});

  case 'READ':
    return _.assign({}, state, {isReading: true, title: action.title});

  case 'DONE_READ':
    // if good, return to state before reading
    return _.assign({}, state, {isReading: false});

  default:
    return state;

  }
};

export { mainReducer }
