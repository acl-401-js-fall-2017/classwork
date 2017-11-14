import React, { PureComponent } from 'react';
import Todo from './Todo';
import shortid from 'shortid';

export default class TodoList extends PureComponent {
  constructor() {
    super();
    this.state = {
      todos: [
        { _id: shortid.generate(), title: 'Learn React', completed: false },
        { _id: shortid.generate(), title: 'Forget React', completed: false },
        { _id: shortid.generate(), title: 'relearn React', completed: false },
      ]
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <section>
        <h3>You have {todos.length} todos</h3>
        <ul>
          {todos.map(todo => <Todo key={todo._id} todo={todo}/>)}
        </ul>
      </section>
    );
  }
}