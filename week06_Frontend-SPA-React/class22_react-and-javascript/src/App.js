import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pets: [
        { type: 'cat', name: 'Felix' },
        { type: 'snake', name: 'Nagini' },
        { type: 'dog', name: 'Lassie' },
        { type: 'cat', name: 'Garfield' },
        { type: 'bird', name: 'Tweety' },
        { type: 'bird', name: 'Polly' },
        { type: 'cat', name: 'Heathcliff' }
      ]
    };
  }

  render() {
    const { pets } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">List of Pets</h1>
        </header>
        <PetList pets={pets}/>        
      </div>
    );
  }
}

class PetList extends Component {
  render() {
    const { pets } = this.props;
    return (
      <ul>
        {pets.map((pet, i) => (
          <Pet key={i} pet={pet}/>)
        )}
      </ul>
    );
  }
}

class Pet extends Component {
  render() {
    const { pet } = this.props;
    return <li>{pet.name} the {pet.type}</li>;
  }
}

export default App;
