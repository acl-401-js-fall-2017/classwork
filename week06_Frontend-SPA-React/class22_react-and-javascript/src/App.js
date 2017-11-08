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
        <Header/>
        <PetList pets={pets}/>        
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">List of Pets</h1>
      </header>
    );
  }
}

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      filter: ''
    };
  }

  render() {
    const { pets } = this.props;
    const { filter } = this.state;
    const filteredPets = filter ? pets.filter(p => p.type === filter) : pets;
    return (
      <div>
        <input value={filter} onChange={({ target }) => {
          this.setState({ filter: target.value });
        }}/>
        <ul>
          {filteredPets.map((pet, i) => (
            <Pet key={i} pet={pet}/>)
          )}
        </ul>
      </div>
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
