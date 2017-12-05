import React, { Component } from 'react';
import Greeting from './Greeting';

export default class App extends Component {
  
  state = {
    salutation: 'Hola',
    name: 'Everybody'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { salutation, name } = this.state;
    return (
      <div>
        <Greeting {...this.state}/>
        <div>
          <input name="salutation" value={salutation} onChange={this.handleChange}/>
          <input name="name" value={name} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}