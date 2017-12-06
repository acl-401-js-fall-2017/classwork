import React, { Component } from 'react';
import './App.css';
import Loading from './Loading';
import Error from './Error';
import Crews from '../crews/Crews';
import { connect } from 'react-redux';

class App extends Component {
  handleThing = () => {
    this.header.style.color = 'red';
  }

  render() {
    const { loading, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pirate Crews</h1>
        </header>
        <main>
          <Crews/>
          <Loading loading={loading}/>
          <Error error={error}/>
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
