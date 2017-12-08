import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadPirates } from '../pirates/actions';

class AddToCrew extends PureComponent {
  componentDidMount() {
    this.props.loadPirates();
  }

  render() {
    const { pirates, onAdd } = this.props;
    if(!pirates) return null;

    return (
      <form onSubmit={event => {
        event.preventDefault();
        onAdd(event.target.elements.pirate.value);
      }}>
        <label>
          Choose an available pirate:&nbsp;
          <select name="pirate">
            {pirates.map(p => <option key={p._id} value={p._id}>{p.name}</option>)}
          </select>
        </label>
        <input type="submit" value="Add To Crew" />
      </form>
    );
  }
}

export default connect(
  state => ({ 
    pirates: state.pirates,
    piratesById: state.piratesById
  }),
  { loadPirates },
  ({ pirates, piratesById }, { loadPirates }, { onAdd }) => {
    const available = pirates ? 
      pirates
        .map(p => piratesById[p])
        .filter(p => (p && !p.crew))
      : null;
    return {
      pirates: available,
      loadPirates,
      onAdd
    };
  }
)(AddToCrew);