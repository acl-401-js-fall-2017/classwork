import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadCrew, removeCrew, updateCrew, addToCrew, removeFromCrew } from './actions';
import PiratesList from '../pirates/PiratesList';
import RemoveButton from '../common/RemoveButton';
import AddToCrew from '../crews/AddToCrew';

class CrewDetail extends PureComponent {

  componentDidMount() {
    this.props.loadCrew();
  }
  render() {
    const { crew, removeCrew, addToCrew, removeFromCrew } = this.props;
    if(!crew) return null;

    return (
      <article>
        <h2>
          {crew.name}
          <RemoveButton onRemove={removeCrew}/>
        </h2>
        <h3>Pirates in the crew</h3>
        <PiratesList 
          pirateIds={crew.pirates} 
          onRemove={removeFromCrew}
          showCrew={false}/>
        <AddToCrew onAdd={addToCrew}/>
      </article>
    );
  }
}

export default connect(
  state => ({ 
    crews: state.crewsById
  }),
  { loadCrew, removeCrew, updateCrew, addToCrew, removeFromCrew },
  ({ crews }, { loadCrew, removeCrew, updateCrew, addToCrew, removeFromCrew }, { crewId }) => ({
    crew: crews[crewId],
    loadCrew: () => loadCrew(crewId),
    removeCrew: () => removeCrew(crewId),
    updateCrew,
    addToCrew: pirateId => addToCrew(crewId, pirateId),
    removeFromCrew: pirateId => removeFromCrew(crewId, pirateId)
  })
)(CrewDetail);