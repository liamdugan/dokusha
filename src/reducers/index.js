// Dokusha main reducers

import _ from 'lodash';
import queryString from 'query-string'
import seedBooks from "../seeds/sampleBook.json";
// import React from 'react';
// import * as initialState from '../initialState.js';

const mainReducer = (state, action) => {
  switch (action.type) {
  case 'LOGIN': {
    // TODO: Seed the database!
    var params = {name: action.username};
    params = queryString.stringify(params);
    fetch('/api/verify?' + params).then(function(r) {
      return r.json();
    }).then(function(profile) {
        console.log(JSON.stringify(profile))
        // if (profile) {
        //   console.log("Logged in user: " + JSON.stringify(profile));
        //   return _.assign({}, state, {loginSucceeded: true, profile: profile, books: seedBooks});
        // } else {
        //   console.log("Something failed on 'LOGIN' reducer");
        //   return _.assign({}, state, {loginFailed: true});
        // }
        return profile;
      });
      return _.assign({}, state, {loginFailed: true});
  };

  case 'LOGIN_ERROR': {
    console.log("Login Error");
    return _.assign({}, state, {loginFailed: true});
  }

  case 'PROFILE_INFO': {
    // var profile = {
    //   name: "Test"
    // };
    // Query database with action.user
    var infoquery = {name: "Test"};
    infoquery = queryString.stringify(infoquery);
    var data = fetch('/api/verify/?' + infoquery).then(function(response) {
      return response.json();
    });
    console.log("Got info for user " + data);
    return _.assign({}, state, {profile: data});
  }

  case 'REQUEST_BOOKS': {
    // TODO: Query database with all the books
    return _.assign({}, state, {books: seedBooks});
  }

  case 'FAVORITE': {
    action.profile.favs.push(action.title);
    return _.assign({}, state, {profile: action.profile});
  }

  case 'READ': {
    return _.assign({}, state, {isReading: true, title: action.title});
  }

  case 'GOOD_READ': {
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
