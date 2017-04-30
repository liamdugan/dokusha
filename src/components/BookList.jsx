// Book list

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Profile.css';
import Book from './Book.jsx';

export default class BookList extends React.Component {

  // Render the List of books depending on the type of list
  render() {
    const profile = this.props.store.profile;
    const books = this.props.store.books;

    // For all books, render empty span if it doesn't match the criteria
    const row = books.map((book, c) => {
      // if it's not read, only show in recommendations
      if (!profile.read.includes(book.title)) {
        if (this.props.type === 'rec') {
          return ((<Book text={book.text} title={book.title} key={c} store={this.props.store} />));
        } else {
          return (<span key={c}></span>);
        }
      // if it's a favorite, show in both favs and read
      } else if (profile.favs.includes(book.title)) {
        if (this.props.type === 'fav') {
          return ((<Book text={book.text} title={book.title} key={c} store={this.props.store} />));
        } else {
          return (<span key={c}></span>);
        }
      // if it's read show in read
      } else {
        if (this.props.type === 'read') {
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
