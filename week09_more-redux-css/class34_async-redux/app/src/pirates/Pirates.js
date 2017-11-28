import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AddItem from '../AddItem';
import { addPirate, loadPirates } from './actions';

class Pirates extends PureComponent {
  
  componentDidMount() {
    this.props.loadPirates();
  }

  render() {
    const { pirates, addPirate } = this.props;
    return (
      <section>
        <AddItem type="pirate" onAdd={pirate => addPirate(pirate)}/>
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
  // map state to props
  state => ({ pirates: state.pirates }),
  // map dispatch to props (short form)
  { addPirate, loadPirates },
  // merge props: combine stateProps, dispatchProps, ownProps
  ({ pirates }, { addPirate, loadPirates }, { crewId }) => {
    return {
      pirates: pirates[crewId] || [],
      addPirate: pirate => addPirate(crewId, pirate),
      loadPirates: () => loadPirates(crewId)
    };
  }
)(Pirates);