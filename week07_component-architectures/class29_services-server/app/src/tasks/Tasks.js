import React, { PureComponent } from 'react';
import Task from './Task';
import AddItem from '../forms/AddItem';
import taskApi from '../services/task-api';
import { addTask, removeTask, updateTask } from './tasks.actions';

export default class TaskList extends PureComponent {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  async componentDidMount() {
    const tasks = await taskApi.get(this.getListId());
    this.setState({ tasks });
  }

  getListId() {
    return this.props.match.params.id;
  }

  handleAdd = async ({ title }) => {
    const task = await taskApi.add({ 
      list: this.getListId(),
      title, 
      completed: false 
    });
    const newState = addTask(this.state, task);
    this.setState(newState);
  }

  handleRemove = async task => {
    await taskApi.remove(task.list, task._id);
    const newState = removeTask(this.state, task._id);
    this.setState(newState);
  }

  handleComplete = async (id, completed) => {
    const task = this.state.tasks.find(t => t._id === id);
    const updated = await taskApi.update(this.getListId(), { ...task, completed });
    const newState = updateTask(this.state, updated);
    this.setState(newState);
  }

  render() {
    const { tasks } = this.state;

    return (
      <section>
        <h3>Hey you have {tasks.length} tasks</h3>
        <ul className="items">
          {tasks.map(task => (
            <Task key={task._id} task={task} 
              onRemove={this.handleRemove}
              onComplete={this.handleComplete}
            />
          ))}
        </ul>
        <AddItem onAdd={this.handleAdd}>
          <input name="title"/>
        </AddItem>
      </section>
    );
  }
}