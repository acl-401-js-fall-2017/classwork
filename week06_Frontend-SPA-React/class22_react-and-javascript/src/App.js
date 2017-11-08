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
      ],
      filter: ''
    };
  }

  render() {
    const { pets, filter } = this.state;
    return (
      <div className="App">
        <Header filter={filter} onFilterChange={filter => {
          this.setState({ filter });
        }}/>
        <PetList pets={pets} filter={filter}/>        
      </div>
    );
  }
}

class Header extends Component {
  render() {
    const { filter, onFilterChange } = this.props;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">List of Pets</h1>
        <input value={filter} onChange={({ target }) => {
          onFilterChange(target.value);
        }}/>
      </header>
    );
  }
}

class PetList extends Component {
  
  render() {
    const { pets, filter } = this.props;
    const filteredPets = filter ? pets.filter(p => p.type === filter) : pets;
    return (
      <div>
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
