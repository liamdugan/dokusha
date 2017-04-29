// Login Button

import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions/index.js';

export default class LoginButton extends React.Component {

  constructor() {
    super();
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    this.props.store.username = username.value;
    this.props.store.password = password.value;
    username.value = ""
    password.value = "";
    this.props.store.dispatch(
      actions.onLogin(this.props.store.username, this.props.store.password)
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
    </div>);
  }
}

LoginButton.propTypes = {
  store: PropTypes.object.isRequired,
};

LoginButton.defaultProps = {

};
