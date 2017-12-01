import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bookActions } from './actions';
import Book from './Book';
import BookForm from './BookForm';

class Books extends PureComponent {

  componentDidMount() {
    this.props.loadBooks();
  }

  render() {
    const { books, addBook } = this.props;

    return (
      <div>
        <BookForm onSubmit={addBook} buttons={{ submit: 'Add', reset: 'Clear' }}/>
        <ul>
          {books.map((book, i) => (
            <Book key={book._id} book={book}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ books }) => ({ books }),
  bookActions
)(Books);