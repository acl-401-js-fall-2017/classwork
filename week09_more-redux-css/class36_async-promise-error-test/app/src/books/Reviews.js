import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Reviews extends PureComponent {

  render() {
    const { reviews } = this.props;

    return (
      <ul>
        {reviews.map(review => (
          <li key={review._id}>{review.comment}</li>
        ))}
      </ul>
    );
  }
}

connect(
  ({ reviews }) => ({ reviews }),
  null,
  ({ reviews }, ignored, { bookId }) => ({
    reviews: reviews[bookId] || []
  })
)(Reviews);