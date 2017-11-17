import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import listApi from '../services/list-api';
import { loadLists, addList, removeList } from './list.actions';
import AddItem from '../forms/AddItem';

export default class Lists extends PureComponent {
  
  state = {
    lists: []
  }

  async componentDidMount() {
    const lists = await listApi.get();
    const newState = loadLists(this.state, lists);
    this.setState(newState);
  }
  
  handleAdd = async ({ title }) => {
    const list = await listApi.add({ title });
    const newState = addList(this.state, list);
    this.setState(newState);
  }

  handleRemove = async id => {
    await listApi.remove(id);
    const newState = removeList(this.state, id);
    this.setState(newState);
  }

  render() {
    const { lists } = this.state;

    return (
      <section>
        <h3>My List of Task Lists</h3>
        <ul className="items">
          {lists.map(list => (
            <li key={list._id}>
              <Link to={`/tasks/${list._id}`}>{list.title}</Link>
              <button onClick={() => this.handleRemove(list._id)}>X</button>
            </li>
          ))}
        </ul>
        <AddItem type="list" onAdd={this.handleAdd}>
          <input name="title"/>
        </AddItem>
      </section>
    );
  }
}