import React, { Component } from 'react';
import logo from './logo.svg';
import './Dokusha.css';

class Dokusha extends Component {
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
      </div>
    );
  }
}

export default Dokusha;
