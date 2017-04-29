// Dokusha main reducers

import _ from 'lodash';
import seedProfile from "../seeds/sampleProfile.json";
import seedBooks from "../seeds/sampleBook.json";
// import React from 'react';
// import * as initialState from '../initialState.js';

const mainReducer = (state, action) => {
  switch (action.type) {
  case 'LOGIN': {
    // TODO: Database request here!
    console.log("Logged in user: " + action.username);
    return _.assign({}, state, {loginSucceeded: true, profile: seedProfile, books: seedBooks});
  }

  case 'LOGIN_ERROR': {
    console.log("Login Error");
    return _.assign({}, state, {loginFailed: true});
  }

  case 'PROFILE_INFO': {
    // TODO: Query database with action.username
    console.log("Got info for user " + action.user);
    return _.assign({}, state, {profile: seedProfile});
  }

  case 'REQUEST_BOOKS': {
    // TODO: Query database with all the books
    console.log("Got books");
    return _.assign({}, state, {books: seedBooks});
  }

  case 'FAVORITE': {
    console.log("Favorited " + action.title);
    action.profile.favs.push(action.title);
    return _.assign({}, state, {profile: action.profile});
  }

  case 'READ': {
    console.log("Read " + action.title);
    //action.profile.read.push(action.title);
    return _.assign({}, state, {isReading: true, title: action.title});
  }

  case 'CLICK_BOOK': {
    console.log("Clicked Book " + action.title);
    return state;
  }

  case 'GOOD_READ': {
    console.log(action.profile.vocab);
    // if good, add to read books and add all words to vocab
    action.profile.read.push(action.title);
    // now add all words to vocab
    Array.prototype.push.apply(action.profile.vocab, action.text.split(" "))
    return _.assign({}, state, {isReading: false, title: action.title});
  }

  case 'BAD_READ': {
    // if bad, return to state before reading
    return _.assign({}, state, {isReading: false});
  }


  default: {
    console.log("Hit default case");
    return state;
  }

  }
};

export { mainReducer }
