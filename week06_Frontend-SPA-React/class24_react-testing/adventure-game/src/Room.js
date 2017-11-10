import React, { Component } from 'react';

export default class Room extends Component {

  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.room === this.props.room) return;
    const { room } = nextProps;
    if(room.challenge) {
      const result = room.challenge(this.props.player);
      if(result) {
        this.props.onPickup(result.item);
        this.setState({ message: result.message });
        room.challenge = false;
      }
    }
  }
  render() {
    const { room, onExit, onPickup } = this.props;
    const { message } = this.state;
    return (
      <div>
        <h2>{room.name}</h2>
        <p>{room.description}</p>
        {message && <p>{message}</p>}
        <p>
          You see: { room.items.map((item, i) => (
            <button key={i} onClick={() => onPickup(item)}>
              {item}
            </button>
          )) }
        </p>
        {room.doors.map((door, i) => {
          return (
            <button key={i} onClick={() => onExit(door)}>
              Door to {door.key}
            </button>
          );
        })}
      </div>
    );
  }
}