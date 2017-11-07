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
      let url = 'https://swapi.co/api/people';
      let people = [];

      while(url) {
        const response = await fetch(url);
        if(!response.ok) throw new Error('Failed to fetch people, status code ' + response.status);
        const body = await response.json();
        people = people.concat(body.results);
        this.setState({ people });
        url = body.next;
      }

      this.setState({ error: null });
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
        <p>count: { people.length }</p>
        <pre style={{ color: 'red' }}>{error && error.message}</pre>
      </div>
    );
  }
}

export default App;
