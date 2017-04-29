// Overarching react component for when a user is reading a book

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Read.css';
import * as actions from '../actions/index.js';

export default class ReadView extends React.Component {

  constructor() {
    super();
    this.completeTrue = this.completeTrue.bind(this);
    this.completeFalse = this.completeFalse.bind(this);
  }

  completeTrue() {
    // if the user understood the material
    this.props.store.dispatch(actions.successfulRead(this.props.store.profile, this.props.title, this.props.text));
  }

  completeFalse() {
    this.props.store.dispatch(actions.unsuccessfulRead());
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
