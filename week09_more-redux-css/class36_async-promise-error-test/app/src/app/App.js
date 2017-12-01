import React, { Component } from 'react';
import './App.css';
import Books from '../books/Books';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { loading, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Books</h1>
        </header>
        <main>
          <Books/>
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
