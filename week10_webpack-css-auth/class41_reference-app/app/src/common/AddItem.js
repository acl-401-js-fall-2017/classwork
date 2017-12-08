import React, { PureComponent } from 'react';

export default class AddItem extends PureComponent {
  render() {
    const { onAdd, type, children } = this.props;
    return (
      <form onSubmit={async event => {
        event.preventDefault();
        const form = event.target;
        const { elements } = form;
        const obj = Object.entries(elements).reduce((obj, [key, input]) => {
          obj[key] = input.type === 'checkbox' ? input.checked : input.value;
          return obj;
        }, {});

        try {
          await onAdd(obj);
          form.reset();
        }
        catch(err) {
          // no-op
        }
      }}>
        <div>
          <label>Name: <input name="name"/></label>
        </div>
        {children}
        <button type="submit">Add {type}</button>
      </form>
    ); 
  }
}