// Dokusha main reducers

import _ from 'lodash';
import queryString from 'query-string'
import seedBooks from "../seeds/sampleBook.json";
// import React from 'react';
// import * as initialState from '../initialState.js';

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
      profile: action.profile,
      books: seedBooks
    });

  case 'DUP_SIGNUP':
    return _.assign({}, state, {
      loginSucceeded: false,
      loginFailed: false,
      signUpFailed: true
    });

  case 'PROFILE_INFO':
    var infoquery = {name: "Test"};
    infoquery = queryString.stringify(infoquery);
    var data = fetch('/api/verify/?' + infoquery).then(function(response) {
      return response.json();
    });
    return _.assign({}, state, {profile: data});

  case 'REQUEST_BOOKS':
    // TODO: Query database with all the books
    return _.assign({}, state, {books: seedBooks});

  case 'FAVORITE':
    return _.assign({}, state, {profile: action.profile});

  case 'READ':
    return _.assign({}, state, {isReading: true, title: action.title});

  case 'GOOD_READ':
    // if good, return to state before reading
    return _.assign({}, state, {isReading: false});

  case 'BAD_READ':
    // if bad, return to state before reading
    return _.assign({}, state, {isReading: false});

  default:
    console.log("Hit default case");
    return state;

  }
};

export { mainReducer }
