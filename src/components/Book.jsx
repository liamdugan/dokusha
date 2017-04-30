// Write Book

import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import '../styles/Book.css';
import * as actions from '../actions/index.js';

export default class Book extends React.Component {

  constructor() {
    super();
    this.favorite = this.favorite.bind(this);
    this.read = this.read.bind(this);
    this.calculateReadability = this.calculateReadability.bind(this);
  }

  // when the favorite button, update db & send a favorite action
  favorite() {
    var profile = this.props.store.profile;
    profile.favs.push(this.props.title);
    var params = queryString.stringify(profile);
    fetch('/api/update?' + params).then((r) => {
      this.props.store.dispatch(actions.favorite(profile));
    });
  }

  // when the is read button is clicked send a read action
  read() {
    this.props.store.dispatch(actions.read(this.props.title));
  }

  // Calculate the percentage of the vocab in the book that the user knows
  calculateReadability() {
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

  // Render percent readability, favButton, and readButton
  // (depending on if the book is read/fav/unread)
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
        return (<button className='readButton' onClick={this.read}>Read</button>);
      }
    }

    return (
      <span>
        <div className='book'>
          <span className='page'>{this.props.title}</span><br />
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
