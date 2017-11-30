import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Response from './Response';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { loading, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Response/>
          {loading && 
            <div className="loader">
              Loading...
            </div>
          }
          {error && 
            <div className="error">
              {Array.isArray(error) 
                ? <ul>error.map(err => <li>err</li>)</ul>
                : error.error ? error.error : error
              }
            </div>
          }
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error
  }),
  null
)(App);
