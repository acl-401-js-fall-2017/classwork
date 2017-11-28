import React, { PureComponent } from 'react';

export default class AddItem extends PureComponent {
  render() {
    const { onAdd, type } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        onAdd({ name: elements.name.value });
        elements.name.value = '';
      }}>
        <input name="name"/>
        <button type="submit">Add {type}</button>
      </form>
    ); 
  }
}