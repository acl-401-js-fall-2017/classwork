import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dogs extends Component {
    
  static propTypes = {
    dogs: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired
  }
  
  static defaultProps = {
    dogs: []
  }

  render() {
    const { dogs, onSelect } = this.props;

    return (
      <ul>
        {dogs.map(dog => (
          <li key={dog} onClick={() => onSelect(dog)}>
            {dog}
          </li>
        ))}
      </ul>
    );
  }
}

