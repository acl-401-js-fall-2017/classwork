import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      people: [],
      error: null
    };
  }

  async componentDidMount() {
    try {
      const json = localStorage.people;
      if(json) {
        this.setState({ people: JSON.parse(json) });
        return;
      }

      let url = 'https://swapi.co/api/people';
      let people = [];
      while(url) {
        const response = await fetch(url);
        if(!response.ok) throw new Error('Failed to fetch people, status code ' + response.status);
        const body = await response.json();
        people = people.concat(body.results);
        url = body.next;
      }
      localStorage.people = JSON.stringify(people);
      this.setState({ people, error: null });
    }
    catch(error) {
      this.setState({ error });
    }

  }

  render() {
    const { people, error } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Star Wars People</h1>
        </header>

        <People people={people}/>
        
        <pre style={{ color: 'red' }}>{error && error.message}</pre>
      </div>
    );
  }
}

class People extends Component {
  render() {
    const { people } = this.props;
    return (
      <ul>
        {people.map((person, i) => <Person key={i} person={person}/>)}
      </ul>
    );
  }
}

class Person extends Component {
  render() {
    const { person } = this.props;
    return <li>{person.name} born {person.birth_year}</li>;
  }
}

export default App;
