// Overarching react component for a user's profile

import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList.jsx';
import '../styles/Profile.css';
import * as actions from '../actions/index.js';

export default class ProfileView extends React.Component {

  constructor() {
    super();
    //this.onBookClick = this.onBookClick.bind(this);
    this.getProfileInfo = this.getProfileInfo.bind(this);
    this.requestBooks = this.requestBooks.bind(this);
  }

  getProfileInfo() {
    // Dispatches database request for user profile JSON object
    this.props.store.dispatch(actions.getProfileInfo(this.props.store.username));
  }

  requestBooks() {
    // Dispatches database request for books
    this.props.store.dispatch(actions.requestBooks());
  }

  render() {
    // TODO: Send request to database for user profile JSON object
    // TODO: get user vocab/readbooks & put into store

    // create first and second Booklist
    return (
      <div className='profile'>
        <p className='hdr-text'>Recommended Reading Material</p><br />
        <BookList type='rec' store={this.props.store} /><br />
        <p className='hdr-text'>Your Favorites</p><br />
        <BookList type='fav' store={this.props.store} /><br />
        <p className='hdr-text'>Books You've read</p><br />
        <BookList type='read' store={this.props.store} />
        <br /><br />
        <span id='refresh-button' onClick={this.getProfileInfo}>Load Profile</span>
        <span id='spacer'></span>
        <span id='refresh-button' onClick={this.requestBooks}>Load Books</span>
      </div>
    )
  }
}

ProfileView.propTypes = {
  store: PropTypes.object.isRequired,
};
