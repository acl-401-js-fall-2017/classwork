import React, { Component } from 'react';

// here is how to access an env variable
const omdbKey = process.env.REACT_APP_OMDB_API_KEY;

export default class SWApp extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      resource: 'people',
      loading: false
    };
  }

  componentDidMount() {
    this.loadResource(this.state.resource);
  }

  async loadResource(resource) {
    this.setState({ loading: true });
    const response = await fetch(`https://swapi.co/api/${resource}`);
    const body = await response.json();
    this.setState({
      items: body.results,
      loading: false
    });
  }

  changeResource(resource) {
    this.setState({ resource }, () => {
      this.loadResource(resource);
    });
  }

  render() {
    const { resource, items, loading } = this.state;
    const choices = ['people', 'planets', 'films', 'species', 'vehicles', 'starships'];
    
    const list = (
      <ul>
        {items.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
    );

    const load = <div>Loading...</div>;

    return (
      <section>
        {choices.map(choice => {
          return <button key={choice} disabled={choice === resource}
            onClick={() => this.changeResource(choice)}
          >
            {choice}
          </button>;
        })}
        <div>{items.length} {resource}</div>
        {loading ? load : list}
      </section>
    );
  }
}
