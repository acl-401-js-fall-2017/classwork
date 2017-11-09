import React from 'react';
import PropTypes from 'prop-types';

Cats.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default function Cats({ cats }) {
  return (
      <ul>
      {cats.map(cat => <li key={cat}>{cat}</li>)}
      </ul>
  );
}