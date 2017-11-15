import React, { PureComponent } from 'react';

export default class ListOfTodos extends PureComponent {
  
  render() {
    const { lists } = this.state;

    return (
      <section>
        <h3>My List of Todo Lists</h3>
        <ul>
          {lists.map(list => (
            <li>list.name</li>
          ))}
        </ul>
        {/* <AddTodo onAdd={this.handleAdd}/> */}
      </section>
    );
  }
}