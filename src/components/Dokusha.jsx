import React from 'react';
import PropTypes from 'prop-types';
import ProfileView from './ProfileView.jsx';
import LoginPage from './LoginPage.jsx';
import logo from '../logo.png';
import '../styles/Dokusha.css';
import * as actions from '../actions/index.js';

export default class Dokusha extends React.Component {

  constructor() {
    super();
    this.state = {
      loginSucceeded: false,
      loginFailed: false,
      signUpFailed: false
    };
  }

  // Listen to changes on the state
  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
    fetch('/api/all').then((r) => {
      r.json().then(data => ({
        data: data,
        status: r.status
      })).then(res => {
        if (r.status !== 200) {
          console.log(r.status);
        } else {
          this.props.store.dispatch(actions.onBookLoad(res.data));
        }
      });
    });
  }

  render() {
    const startText = "To get started, please sign up or log in!";
    const loginFailText = "Login Unsuccessful";
    const signUpFailText = "Sign Up Unsuccessful: An account already exists with that username";
    // Render start text based on if there has been a login fail attempt yet
    const ifFail = () => {
      if (this.state.loginFailed) {
        return (<p className="Dokusha-intro">{loginFailText}</p>);
      } else if (this.state.signUpFailed) {
        return (<p className="Dokusha-intro">{signUpFailText}</p>);
      } else {
        return (<p className="Dokusha-intro">{startText}</p>);
      }
    };

    // if we've just successfully logged in
    // add books & profile to the store & render ProfileView
    if (this.state.loginSucceeded) {
      this.props.store.books = this.state.books;
      this.props.store.profile = this.state.profile;
      return (
        <div className="Dokusha">
          <div className="Dokusha-header">
            <img src={logo} className="Dokusha-logo" alt="logo" />
            <h2>Welcome {this.props.store.profile.name}!</h2>
            <br /><br />
            <ProfileView store={this.props.store} isReading={this.state.isReading} title={this.state.title} />
          </div>
      </div>);

    // otherwise just render the login page
    } else {
      return (
        <div className="Dokusha">
          <div className="Dokusha-header">
            <img src={logo} className="Dokusha-logo" alt="logo" />
            <h2>Welcome to Dokusha</h2>
          </div>
          {ifFail()}
          <LoginPage store={this.props.store} />
          <br />
        </div>
      );
    }
  }
}

Dokusha.propTypes = {
  store: PropTypes.object.isRequired
};
