import React, { Component } from 'react';
import { Greetings } from './Greetings';

class App extends Component {
  render() {
    return <Greetings people={['Julie', 'Fred', 'Jones']}/>;
  }
}

export default App;
