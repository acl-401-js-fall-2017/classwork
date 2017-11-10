import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './Room';
import Player from './Player';
import rooms from './rooms';

class App extends Component {

  constructor() {
    super();
    this.state = {
      rooms,
      room: rooms[0],
      player: {
        name: 'Yoyo',
        inventory: []
      }
    };
  }

  handleExit = room => {
    this.setState({ room });
  }

  handlePickup = item => {
    const { room, player } = this.state;
    const index = room.items.indexOf(item);
    if(index > -1) room.items.splice(index, 1);

    player.inventory.push(item);

    this.setState({
      room, player
    });
  }

  handleDrop = item => {
    const { room, player } = this.state;
    const index = player.inventory.indexOf(item);
    if(index > -1) player.inventory.splice(index, 1);

    room.items.push(item);

    this.setState({
      room, player
    });
  }

  render() {
    const { player, room } = this.state;
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Player player={player}
            onDrop={this.handleDrop}
          />
        </div>
        <Room 
          player={player}
          room={room} 
          onExit={this.handleExit}
          onPickup={this.handlePickup}
        />
      </div>
    );
  }
}

export default App;
