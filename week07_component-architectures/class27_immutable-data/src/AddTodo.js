import React, { PureComponent } from 'react';

export default class AddTodo extends PureComponent {
  render() {
    const { onAdd } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        onAdd(elements.title.value);
        elements.title.value = '';
      }}>
        <input name="title"/>
        <button type="submit">Add</button>
      </form>
    ); 
  }
}