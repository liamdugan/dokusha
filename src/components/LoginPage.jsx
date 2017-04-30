// Login Page

import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions/index.js';
import _ from 'lodash';
import queryString from 'query-string'

export default class LoginPage extends React.Component {

  constructor() {
    super();
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }

  // Queries the database to get the user's profile
  onLoginClick() {
    var name = document.getElementById('username');
    var password = document.getElementById('password');
    var params = queryString.stringify({name: name.value});
    fetch('/api/verify?' + params).then((r) => {
      r.json().then(data => ({
        data: data,
        status: r.status
      })).then(res => {
        if (_.isEmpty(res.data)) {
          this.props.store.dispatch(
            actions.onFailedLogin()
          );
        } else {
          this.props.store.dispatch(
            actions.onSuccessfulLogin(res.data)
          );
        }
      });
    });
    name.value = "";
    password.value = "";
  }

  // Adds the new user's profile to the database and logs them in
  // returns status 409 if the user already exists in the database
  onSignUpClick() {
    var name = document.getElementById('username');
    var password = document.getElementById('password');
    var params = queryString.stringify({name: name.value, password: password.value});
    fetch('/api/new?' + params).then((r) => {
      if (r.status !== 409) {
        r.json().then(data => ({
          data: data,
          status: r.status
        })).then(res => {
          if (_.isEmpty(res.data)) {
            this.props.store.dispatch(
              actions.onFailedLogin()
            );
          } else {
            this.props.store.dispatch(
              actions.onSuccessfulLogin(res.data)
            );
          }
        });
      } else {
        this.props.store.dispatch(actions.onDuplicateSignup());
      }
    });
    name.value = "";
    password.value = "";
  }

  render() {
    return (
      <div className='login'>
      <form className='login'>
        <span id='user-text'>Username</span>
        <br></br>
        <input type='text' id='username'></input>
        <br></br>
        <span id='pw-text'>Password</span>
        <br></br>
        <input type='password' id='password'></input>
        <br></br><br></br><br></br>
      </form>
      <span onClick={this.onLoginClick} className='login-button'>Login!</span>
      <span className='spacer'></span>
      <span onClick={this.onSignUpClick} className='login-button'>Sign Up!</span>
    </div>);
  }
}

LoginPage.propTypes = {
  store: PropTypes.object.isRequired,
};
