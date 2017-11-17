import React, { PureComponent } from 'react';

export default class Task extends PureComponent {
  render() {
    const { task, onRemove, onComplete } = this.props;
    return (
      <li className={task.completed ? 'completed' : ''}>
        <input type="checkbox" checked={task.completed}
          onChange={({ target }) => onComplete(task._id, target.checked)}
        />
        {task.title}
        <button onClick={() => onRemove(task)}>x</button>
      </li>
    ); 
  }
}