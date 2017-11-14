import React, { PureComponent } from 'react';

export default class Todo extends PureComponent {
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? 'completed' : ''}>
        <input type="checkbox"/>
        {todo.title}
      </li>
    ); 
  }
}