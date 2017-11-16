import React, { PureComponent } from 'react';

export default class Todo extends PureComponent {
  render() {
    const { todo, onRemove, onComplete } = this.props;
    return (
      <li className={todo.completed ? 'completed' : ''}>
        <input type="checkbox" checked={todo.completed}
          onChange={({ target }) => onComplete(todo._id, target.checked)}
        />
        {todo.title}
        <button onClick={() => onRemove(todo._id)}>x</button>
      </li>
    ); 
  }
}