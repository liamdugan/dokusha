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
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var params = queryString.stringify({name: username.value});
    fetch('/api/verify?' + params).then((r) => {
      r.json().then(data => ({
        data: data,
        status: r.status
      })).then(res => {
        console.log(res.data);
        if (_.isEmpty(res.data)) {
          console.log("Login Failed");
          this.props.store.dispatch(
            actions.onFailedLogin()
          );
        } else {
          console.log("We did it!");
          this.props.store.dispatch(
            actions.onSuccessfulLogin(res.data)
          );
        }
      });
    });
    username.value = "";
    password.value = "";
  }

  onSignUpClick() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    this.props.store.username = username.value;
    this.props.store.password = password.value;
    username.value = ""
    password.value = "";
    this.props.store.dispatch(
      actions.onSignUp(this.props.store.username, this.props.store.password)
    );
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
