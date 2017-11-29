import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Response from './Response';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Response/>
          {this.props.loading && 
            <div className="loader">
              Loading...
            </div>
          }
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({ loading: state.loading }),
  null
)(App);
