import React, { PureComponent } from 'react';
import { loadLists, addList, removeList } from './list.actions';
import AddItem from './AddItem';

export default class ListOfTodos extends PureComponent {
  
  state = {
    lists: []
  }

  componentDidMount() {
    const lists = window.localStorage.getItem('lists');
    if(lists) {
      const newState = loadLists(this.state, JSON.parse(lists));
      this.setState(newState);
    }

    window.onbeforeunload = () => {
      const json = JSON.stringify(this.state.lists);
      window.localStorage.setItem('lists', json);
    };
  }

  handleAdd = title => {
    const newState = addList(this.state, title);
    this.setState(newState);
  }

  handleRemove = id => {
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
              {list.title}
              <button onClick={() => this.handleRemove(list._id)}>X</button>
            </li>
          ))}
        </ul>
        <AddItem onAdd={this.handleAdd}/>
      </section>
    );
  }
}