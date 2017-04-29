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
    const ifFail = () => {
      if (this.state.loginFailed) {
        return (<p className="Dokusha-intro">Login info incorrect</p>);
      } else {
        return (<p className="Dokusha-intro">To get started, please log in!</p>);
      }
    };

    if (this.state.loginSucceeded) {
      return (
        <div className="Dokusha">
          <div className="Dokusha-header">
            <img src={logo} className="Dokusha-logo" alt="logo" />
            <h2>Hello user: {this.props.store.username}!</h2>
          </div>
      </div>);
    } else {
      return (
        <div className="Dokusha">
          <div className="Dokusha-header">
            <img src={logo} className="Dokusha-logo" alt="logo" />
            <h2>Welcome to Dokusha</h2>
          </div>
          {ifFail()}
          <LoginButton store={this.props.store}/>
          <br />
        </div>
      );
    }
  }
}

Dokusha.propTypes = {
  store: PropTypes.object.isRequired
};
