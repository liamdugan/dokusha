// Overarching react component for a user's profile

import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList.jsx';
import ReadView from './ReadView.jsx';
import * as actions from '../actions/index.js';
import '../styles/Profile.css';

export default class ProfileView extends React.Component {

  constructor() {
    super();
    this.logOut = this.logOut.bind(this);
  }

  // if logOut button is pressed, log out
  logOut() {
    this.props.store.dispatch(actions.onLogOut(this.props.title));
  }

  render() {
    // if we're reading, render a ReadView object
    if (this.props.isReading) {
      const books = this.props.store.books.books;
      var text = "";
      // search for the book we're reading and get its text
      for (var i = 0; i < books.length; i++) {
        if (books[i].title === this.props.title) {
          text = books[i].text;
        }
      }
      return (
        <ReadView store={this.props.store} title={this.props.title} text={text}/>
      );
    // otherwise jsut render three BookLists
    } else {
      return (
        <div className='profile'>
          <p className='hdr-text'>Recommended Reading Material</p><br />
          <BookList type='rec' store={this.props.store} /><br />
          <p className='hdr-text'>Your Favorites</p><br />
          <BookList type='fav' store={this.props.store} /><br />
          <p className='hdr-text'>Books You've read</p><br />
          <BookList type='read' store={this.props.store} />
          <br /><br />
          <span id='refresh-button' onClick={this.logOut}>Log out</span>
        </div>
      );
    }
  }
}

ProfileView.propTypes = {
  store: PropTypes.object.isRequired,
  isReading: PropTypes.bool.isRequired,
  title: PropTypes.string
};

ProfileView.defaultProps = {
  isReading: false
}
