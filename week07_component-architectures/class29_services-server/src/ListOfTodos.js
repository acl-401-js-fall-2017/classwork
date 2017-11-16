import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { listApi } from './api';
import { addList, removeList } from './list.actions';
import AddItem from './AddItem';

export default class ListOfTodos extends PureComponent {
  
  state = {
    lists: []
  }

  async componentDidMount() {
    const lists = await listApi.get();
    this.setState({ lists });
  }
  
  handleAdd = async title => {
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
        <h3>My List of Todo Lists</h3>
        <ul className="albums">
          {lists.map(list => (
            <li key={list._id}>
              <Link to={`/todos/${list._id}`}>{list.title}</Link>
              <button onClick={() => this.handleRemove(list._id)}>X</button>
            </li>
          ))}
        </ul>
        <AddItem type="list" onAdd={this.handleAdd}/>
      </section>
    );
  }
}