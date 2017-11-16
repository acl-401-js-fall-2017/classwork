import React, { PureComponent } from 'react';
import Todo from './Todo';
import AddItem from './AddItem';
import { loadTodos, addTodo, removeTodo, changeTodoCompletion } from './todo.actions';

export default class TodoList extends PureComponent {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    const newState = loadTodos(this.state, this.props.match.params.id);
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
    const { todos } = this.state;

    return (
      <section>
        <h3>Hey you have {todos.length} todos</h3>
        <ul>
          {todos.map(todo => (
            <Todo key={todo._id} todo={todo} 
              onRemove={this.handleRemove}
              onComplete={this.handleComplete}
            />
          ))}
        </ul>
        <AddItem onAdd={this.handleAdd}/>
      </section>
    );
  }
}