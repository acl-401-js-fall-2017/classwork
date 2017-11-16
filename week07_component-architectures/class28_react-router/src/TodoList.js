import React, { PureComponent } from 'react';
import Todo from './Todo';
import AddItem from './AddItem';
import { todoApi } from './api';
import { addTodo, removeTodo, updateTodo } from './todo.actions';

export default class TodoList extends PureComponent {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    const todos = await todoApi.get(this.getListId());
    this.setState({ todos });
  }

  getListId() {
    return this.props.match.params.id;
  }

  handleAdd = async title => {
    const todo = await todoApi.add(this.getListId(), { title, completed: false });
    const newState = addTodo(this.state, todo);
    this.setState(newState);
  }

  handleRemove = async id => {
    await todoApi.remove(this.getListId(), id);
    const newState = removeTodo(this.state, id);
    this.setState(newState);
  }

  handleComplete = async (id, completed) => {
    const todo = this.state.todos.find(t => t._id === id);
    const updated = await todoApi.update(this.getListId(), { ...todo, completed });
    const newState = updateTodo(this.state, updated);
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