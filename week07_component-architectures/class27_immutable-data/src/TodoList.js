import React, { PureComponent } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { loadTodos, addTodo, removeTodo, changeTodoCompletion } from './actions';

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
    const newState = addTodo(this.state, title);
    this.setState(newState);
  }

  handleRemove = id => {
    const newState = removeTodo(this.state, id);
    this.setState(newState);
  }

  handleComplete = (id, completed) => {
    const newState = changeTodoCompletion(this.state, { _id: id, completed });
    this.setState(newState);
  }

  render() {
    const { todos, name } = this.state;

    return (
      <section>
        <h3>Hey, {name}, You have {todos.length} todos</h3>
        <ul>
          {todos.map(todo => (
            <Todo key={todo._id} todo={todo} 
              onRemove={this.handleRemove}
              onComplete={this.handleComplete}
            />
          ))}
        </ul>
        <AddTodo onAdd={this.handleAdd}/>
      </section>
    );
  }
}