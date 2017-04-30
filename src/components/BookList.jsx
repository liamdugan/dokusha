// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// components/BookList.js - Component that sorts and renders a list of Book components

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Profile.css';
import Book from './Book.jsx';

export default class BookList extends React.Component {

  calcReadability(book) {
    const vocab = this.props.store.profile.vocab;
    const text = book.text.split(" ");
    var knownWords = 0;
    for (var i = 0; i < text.length; i++) {
      if (vocab.includes(text[i])) {
        knownWords++;
      }
    }
    return (knownWords / text.length) * 100;
  }

  // Render the List of books depending on the type of list
  render() {
    const profile = this.props.store.profile;
    const books = this.props.store.books;

    const sortedBooks = books.sort((bookA, bookB) => {
      if (this.calcReadability(bookA) < this.calcReadability(bookB)) {
        return 1;
      } else if (this.calcReadability(bookA) > this.calcReadability(bookB)) {
        return -1;
      } else {
        return 0;
      }
    });
    var unreadBooksShown = 0;
    var favBooksShown = 0;
    var readBooksShown = 0;
    // For all books, render empty span if it doesn't match the criteria
    const row = sortedBooks.map((book, c) => {
      // if it's not read, only show in recommendations
      if (!profile.read.includes(book.title)) {
        if (this.props.type === 'rec' && unreadBooksShown < 6) {
            unreadBooksShown++;
            return ((<Book text={book.text} title={book.title} key={c} store={this.props.store} />));
        } else {
          return (<span key={c}></span>);
        }
      // if it's a favorite, show in both favs and read
      } else if (profile.favs.includes(book.title)) {
        if (this.props.type === 'fav' && favBooksShown < 6) {
          favBooksShown++;
          return ((<Book text={book.text} title={book.title} key={c} store={this.props.store} />));
        } else {
          return (<span key={c}></span>);
        }
      // if it's read show in read
      } else {
        if (this.props.type === 'read' && readBooksShown < 6) {
          readBooksShown++;
          return ((<Book text={book.text} title={book.title} key={c} store={this.props.store} />));
        } else {
          return (<span key={c}></span>);
        }
      }
    });
    return (<div className='book-list'>{row}</div>)
  }
}

BookList.propTypes = {
  store: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};
