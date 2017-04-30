// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// components/ReadView.js - Component that houses the view for reading the text of a book

import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import '../styles/Read.css';
import * as actions from '../actions/index.js';

export default class ReadView extends React.Component {

  constructor() {
    super();
    this.completeTrue = this.completeTrue.bind(this);
    this.completeFalse = this.completeFalse.bind(this);
  }

  // if the user understood the material, add text to vocab,
  // book to read, and update the database
  completeTrue() {
    var profile = this.props.store.profile;
    profile.read.push(this.props.title);
    Array.prototype.push.apply(profile.vocab, this.props.text.split(" "));
    var params = queryString.stringify(profile);
    fetch('/api/update?' + params).then((r) => {
      this.props.store.dispatch(actions.doneRead());
    });
  }

  // if user didn't understand, just return to regular view
  completeFalse() {
    this.props.store.dispatch(actions.doneRead());
  }

  render() {
    return (
      <div className='read-view'>
        <p className='hdr-text'>{this.props.title}</p><br />
        <div className='book-text'>
          <p className='text'>{this.props.text}</p>
        </div><br />
        <p className='read-end'>Did you understand this book?</p>
        <button id='yes' onClick={this.completeTrue}>Yes</button>
        <span id='spacer'></span>
        <button id='no' onClick={this.completeFalse}>No</button><br />
      </div>
    );
  }
}

ReadView.propTypes = {
  store: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};
