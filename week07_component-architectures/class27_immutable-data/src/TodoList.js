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
    this.history = [];
  }

  // Really history should belong in the state actions.
  // But where we are missing some pieces that would
  // make that straight forward.
  // So for now, let's override the setState so we 
  // can cache the history on a component level
  setState(state, ignore = false) {
    if(!ignore) this.history.push(this.state);
    super.setState(state);
  }

  componentDidMount() {
    const newState = loadTodos(this.state);
    this.setState(newState);
    // let's not consider the load event "undoable"
    this.history = [];
  }

  undo = () => {
    if(!this.history.length) return;
    const last = this.history.pop();
    this.setState(last, true);
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
        <button disabled={!this.history.length} onClick={this.undo}>Undo</button>
      </section>
    );
  }
}