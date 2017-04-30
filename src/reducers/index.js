// Dokusha main reducers

import _ from 'lodash';
import seedBooks from "../seeds/sampleBook.json";

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

  case 'LOG_OUT':
    return _.assign({}, state, {
      loginSucceeded: false,
      loginFailed: false,
      signUpFailed: false
    });

  case 'FAVORITE':
    return _.assign({}, state, {profile: action.profile});

  case 'READ':
    return _.assign({}, state, {isReading: true, title: action.title});

  case 'DONE_READ':
    // if good, return to state before reading
    return _.assign({}, state, {isReading: false});

  default:
    console.log("Hit default case");
    return state;

  }
};

export { mainReducer }
