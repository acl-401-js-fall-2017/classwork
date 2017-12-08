import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AddItem from '../common/AddItem';
import Crew from './Crew';
import { addCrew, loadCrews } from './actions';

class Crews extends PureComponent {

  componentDidMount() {
    this.props.loadCrews();
  }

  render() {
    const { crewIds, addCrew } = this.props;
    return (
      <section>
        <h2>Crews</h2>
        <AddItem type="crew" onAdd={addCrew}/>
        <ul>
          {crewIds.map(id => (
            <Crew key={id} crewId={id}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(
  state => ({ 
    crewIds: state.crews || []
  }),
  { addCrew, loadCrews }
)(Crews);