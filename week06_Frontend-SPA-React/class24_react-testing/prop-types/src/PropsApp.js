import React, { Component } from 'react';
import PetType from './PetType';
import logo from './logo.svg';
import './App.css';

export default class PropsApp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      number: 12
    };
  }

  handleNameChange = ({ name, color }) => {
    this.setState({ name });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What is your pet type?</h2>
        </div>
        <div>
          <NameInput onChange={this.handleNameChange}/>
          <PetType name={this.state.number}/>
        </div>
      </div>
    );
  }
}

function NameInput({ onChange }) {
  return (
    <form onSubmit={event => {
      event.preventDefault();
      const { elements } = event.target;
      // console.log(new FormData(event.target));
      onChange({
        name: elements.name.value,
        color: elements.color.value
      });
    }}>
      <label>name: <input name="name"/></label>
      <label>color: <input name="color"/></label>
      <button name="the-button" type="submit">Search</button>
    </form>
  );
}