import React from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ _id, title, author, buttons, onSubmit, onReset }) => (
  <form onSubmit={async event => {
    event.preventDefault();
    const form = event.target;
    const { title, author } = form.elements;

    try {
      await onSubmit({
        _id,
        title: title.value,
        author: author.value
      });

      form.reset();
      title.focus();
    }
    catch(err) {
      // don't dismiss the form
    }
  }}
  
  onReset={({ target: form }) => {
    form.reset();
    onReset && onReset();
  }}>
    <label>Title: <input name="title" defaultValue={title}/></label>
    <label>Author: <input name="author" defaultValue={author}/></label>
    <button type="submit">{buttons.submit}</button>
    <button type="reset">{buttons.reset}</button>
  </form>
);

BookForm.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func
};

export default BookForm;