import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Hello React',
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
        url = body.next;
      }

      this.setState({ 
        people,
        error: null 
      });
    }
    catch(error) {
      this.setState({ error });
    }

  }

  handleTitleChange = title => {
    this.setState({ title });
  }

  render() {
    const { title, error, people } = this.state;
    return (
      <div className="App">
        <Header title={title} upper={true}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TitleInput title={title} onTitleChange={this.handleTitleChange}/>
        <pre style={{ color: 'red' }}>{error && error.message}</pre>
      </div>
    );
  }
}

class TitleInput extends Component {
  render() {
    const { title, onTitleChange } = this.props;
    return (
      <div>
        <input value={title} onChange={({ target }) => onTitleChange(target.value)}/>
      </div>
    );
  }
}


class Header extends Component {
  render() {
    const displayText = this.props.upper ? this.props.title.toUpperCase() : this.props.title;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{displayText}</h1>
      </header>
    );
  }
}

export default App;
