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
    this.props.store.dispatch(
      actions.onLogin(this.props.username, this.props.password)
    );
  }

  render() {
    return (<span onClick={this.onLoginClick} className='login-button'>Login!</span>);
  }
}

LoginButton.propTypes = {
  store: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

LoginButton.defaultProps = {
  username: "test",
  password: "password"
};
