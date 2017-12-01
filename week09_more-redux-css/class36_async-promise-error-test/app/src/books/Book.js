import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bookActions } from './actions';
import BookForm from './BookForm';
import Reviews from './Reviews';

class Book extends PureComponent {

  state = {
    editing: false
  }

  static propTypes = {
    book: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author: PropTypes.string,
      title: PropTypes.string,
    }),
    removeBook: PropTypes.func.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  handleEdit = (book) => {
    return this.props.updateBook(book);
  }

  render() {
    const { book, removeBook } = this.props;
    const { _id, author, title } = book;

    return (
      <li>
        {this.state.editing
          ? (
            <div>
              <BookForm {...book}  
                buttons={{ submit: 'Update', reset: 'Cancel' }}
                onSubmit={this.handleEdit}
                onReset={() => this.setState({ editing: false })}/>
            </div>
          )
          : (
            <div>
              {title} by {author}
              <button onClick={() => this.setState({ editing: true })}>✎</button>
              <button onClick={() => removeBook(_id)}>X</button>
              {/* <Reviews bookId={_id}/> */}
            </div>
          )
        }
      </li>
    );
  }
}

export default connect(
  null,
  bookActions
)(Book);