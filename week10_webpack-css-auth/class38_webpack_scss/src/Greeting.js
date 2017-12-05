import React, { Component } from 'react';
import './Greeting.scss';

export default class Greeting extends Component {
  render() {
    const { salutation = 'Hello', name = 'World' } = this.props;

    return (
      <div className="greeting">
        {salutation} <span>{name}</span>!
      </div>
    );
  }
}