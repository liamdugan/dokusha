// Write Book

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';
import * as actions from '../actions/index.js';

export default class Book extends React.Component {

  constructor() {
    super();
    this.favorite = this.favorite.bind(this);
    this.isRead = this.isRead.bind(this);
    this.clickBook = this.clickBook.bind(this);
    this.calculateReadability = this.calculateReadability.bind(this);
  }

  favorite() {
    // when the favorite button is clicked
    this.props.store.dispatch(actions.favorite(this.props.title, this.props.store.profile));
  }

  isRead() {
    // when the is read button is clicked
    this.props.store.dispatch(actions.isRead(this.props.title, this.props.store.profile));
  }

  clickBook() {
    // when the book is clicked send to read
    this.props.store.dispatch(actions.clickBook(this.props.title, this.props.text));
  }

  calculateReadability() {
    // something done on creation of each book component
    const vocab = this.props.store.profile.vocab;
    const text = this.props.text.split(" ");
    var knownWords = 0;
    for (var i = 0; i < text.length; i++) {
      if (vocab.includes(text[i])) {
        knownWords++;
      }
    }
    return (knownWords / text.length) * 100;
  }

  render() {
    const readability = Math.round(this.calculateReadability());
    const profile = this.props.store.profile;
    const favButton = () => {
      if (!profile.favs.includes(this.props.title) && profile.read.includes(this.props.title)) {
        return (<button className='favButton' onClick={this.favorite}>Favorite!</button>);
      }
    }
    const readButton = () => {
      if (!profile.read.includes(this.props.title)) {
        return (<button className='isReadButton' onClick={this.isRead}>Read</button>);
      }
    }
    return (
      <span>
      <div className='book'>
        <span className='page' onClick={this.clickBook}>{this.props.title}</span><br />
        <span className='readability'>Readability: {readability}%</span><br />
        {favButton()}
        {readButton()}
      </div>
      </span>
    )
  }
}

Book.propTypes = {
  store: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
