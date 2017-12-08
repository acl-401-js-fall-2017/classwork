import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AddItem from '../common/AddItem';
import PiratesList from './PiratesList';
import { addPirate, loadPirates, removePirate } from './actions';

class Pirates extends PureComponent {

  componentDidMount() {
    this.props.loadPirates();
  }

  render() {
    const { pirateIds, addPirate, removePirate } = this.props;
    return (
      <section>
        <h2>Pirates</h2>
        <AddItem type="pirate" onAdd={addPirate}/>
        <PiratesList pirateIds={pirateIds} onRemove={removePirate}/>
      </section>
    );
  }
}

export default connect(
  state => ({ 
    pirateIds: state.pirates || []
  }),
  { addPirate, loadPirates, removePirate }
)(Pirates);