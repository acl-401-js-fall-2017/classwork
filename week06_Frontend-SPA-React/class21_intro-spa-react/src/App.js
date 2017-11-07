import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      salutation: 'Hello',
      name: '401 JS',
      color: '#fffff'
    };
  }

  handleSalutationChange(value) {
    this.setState({ salutation: value });
  }

  handleNameChange(value) {
    this.setState({ name: value });
  }

  handleColorChange(value) {
    this.setState({ color: value });
  }

  render() {
    const { salutation, name, color } = this.state;

    return (
      <div className="App">
        <Controls salutation={salutation} name={name}
          onSalutationChange={salutation => this.handleSalutationChange(salutation)}
          onNameChange={name => this.handleNameChange(name)}
          onColorChange={color => this.handleColorChange(color)}
        />
        <Greeting salutation={salutation} 
          color={color} name={name} specialClass="weird"
        />
      </div>
    );
  }
}

class Controls extends Component {
  render() {
    const { salutation, name, color, onSalutationChange, onNameChange, onColorChange } = this.props;
    return (
      <div>
        <label>
          salutation: 
          <input name="salutation" value={salutation} 
            onChange={({ target }) => onSalutationChange(target.value)}/>
        </label>
        <label>
          name: <input name="name" value={name}
            onChange={({ target }) => onNameChange(target.value)}/>
        </label>
        <label>
          color: <input name="color" type="color" value={color}
            onChange={({ target }) => onColorChange(target.value)}/>
        </label>
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    const { salutation, name, color, specialClass } = this.props;

    return (
      <div style={{ color }} className={specialClass}>
        <span>{salutation.toUpperCase()}</span>
        &nbsp;
        <span>{name}</span>
      </div>
    );
  }
}

export default App;
