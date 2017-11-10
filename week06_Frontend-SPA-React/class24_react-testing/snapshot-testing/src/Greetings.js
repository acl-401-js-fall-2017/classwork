import React, { Component } from 'react';
import PropTypes from 'prop-types';

export function Greeter({ salutation = 'Hello', name }) {
  return <div><em>{salutation}</em> {name}!</div>;
}

Greeter.propTypes = {
  salutation: PropTypes.string,
  name: PropTypes.string.isRequired
};

export class Greetings extends Component {

  static propTypes = {
    people: PropTypes.array.isRequired
  }

  constructor() {
    super();
    this.state = {
      salutation: 'Hello'
    };
  }

  changeSalutation(salutation) { 
    this.setState({
      salutation: salutation || this.getOppositeSalutation()
    });
  }

  getOppositeSalutation() {
    return this.state.salutation === 'Hello' ? 'Goodbye' : 'Hello';
  }

  render() {
    const { salutation } = this.state;
    const opposite = this.getOppositeSalutation();
    const { people } = this.props;
    return (
      <div>
        <ul>
          {people.map((person, i) => (
            <Greeter key={i} salutation={salutation} name={person} />
          ))}
        </ul>
        <button onClick={() => this.changeSalutation(opposite)}>
          Say {opposite}
        </button>
        {<input onChange={({ target }) => this.changeSalutation(target.value)}/>}
      </div>
    );
  }
}
