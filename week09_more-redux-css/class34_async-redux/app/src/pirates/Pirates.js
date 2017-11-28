import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AddItem from '../AddItem';
import { addPirate } from './actions';

class Pirates extends PureComponent {
  
  render() {
    const { pirates, addPirate } = this.props;
    return (
      <section>
        <AddItem type="crew" onAdd={pirate => addPirate(pirate)}/>
        <h3>Pirates in the Crew</h3>
        <ul>
          {pirates.map(pirate => (
            <li key={pirate._id}>{pirate.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(
  state => ({ pirates: state.pirates }),
  { addPirate },
  ({ pirates }, { addPirate }, { crewId }) => {
    return {
      pirates: pirates[crewId],
      addPirate: pirate => addPirate(crewId, pirate)
    };
  }
)(Pirates);