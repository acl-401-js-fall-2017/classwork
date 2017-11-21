import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addPirate, updatePirate, removePirate } from './actions';
import PirateForm from './PirateForm';

class Pirates extends PureComponent {

  componentDidMount() {
    this.props.addPirate({ name: 'Monky D Luffy', role: 'Captain' });
    this.props.addPirate({ name: 'Nami', role: 'Navigator' });
  }

  handleAdd = pirate => {
    this.props.addPirate(pirate);
  }

  handleUpdate = pirate => {
    this.props.updatePirate(pirate);
  }

  handleRemove = id => {
    this.props.removePirate(id);
  }

  render() {
    const { pirates } = this.props;

    return (
      <div>
        <PirateForm onComplete={this.handleAdd}/>
        <ul>
          {pirates.map(pirate => (
            <li key={pirate._id}>
              <h4>
                {pirate.name} the {pirate.role}
                <button onClick={() => this.handleRemove(pirate._id)}>X</button>
              </h4>
              <PirateForm pirate={pirate} text="Update"
                onComplete={this.handleUpdate}/>
            </li>))}
        </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pirates: state
  };
}

// Below is short cut way to do this.
// It calls bindActionCreators under the covers
// function mapDispatchToProps(dispatch) {
//   return {
//     addPirate(pirate) {
//       const actionCreated = addPirate(pirate);
//       dispatch(actionCreated);
//     }
//   };
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { addPirate, updatePirate, removePirate }
)(Pirates);
