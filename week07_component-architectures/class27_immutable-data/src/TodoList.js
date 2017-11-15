import React, { PureComponent } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import shortid from 'shortid';

function loadTodos(state) {
  return {
    ...state,
    todos: [
      { _id: shortid.generate(), title: 'Learn React', completed: false },
      { _id: shortid.generate(), title: 'Forget React', completed: false },
      { _id: shortid.generate(), title: 'Relearn React', completed: false },
    ]
  };
}

export default class TodoList extends PureComponent {
  constructor() {
    super();
    this.state = {
      todos: [],
      name: 'marty'
    };
  }

  componentDidMount() {
    const newState = loadTodos(this.state);
    this.setState(newState);
  }

  handleAdd = title => {
    console.log(title);
  }

  render() {
    const { todos, name } = this.state;

    return (
      <section>
        <h3>Hey, {name}, You have {todos.length} todos</h3>
        <ul>
          {todos.map(todo => <Todo key={todo._id} todo={todo}/>)}
        </ul>
        <AddTodo onAdd={this.handleAdd}/>
      </section>
    );
  }
}