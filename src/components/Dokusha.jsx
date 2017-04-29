import React from 'react';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton.jsx';
import logo from '../logo.svg';
import '../styles/Dokusha.css';
import * as initialState from '../initialState.js';
import * as actions from '../actions/index.js';

export default class Dokusha extends React.Component {

  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  onLogin() {
    this.props.store.dispatch(actions.onLogin());
  }

  render() {
    return (
      <div className="Dokusha">
        <div className="Dokusha-header">
          <img src={logo} className="Dokusha-logo" alt="logo" />
          <h2>Welcome to Dokusha</h2>
        </div>
        <p className="Dokusha-intro">
          To get started, please log in!
        </p>
        <br></br>
        <LoginButton store={this.props.store}
          username={this.state.username}
          password={this.state.password}/>
      </div>
    );
  }
}

Dokusha.propTypes = {
  store: PropTypes.object.isRequired
};
