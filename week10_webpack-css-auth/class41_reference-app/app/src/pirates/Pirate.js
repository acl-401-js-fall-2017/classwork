import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RemoveButton from '../common/RemoveButton';

class PirateItem extends PureComponent {

  render() {
    const { pirate, crew, onRemove } = this.props;
    if(!pirate) return null;
    
    return (
      <li>
        <Link to={`/pirates/${pirate._id}`}>{pirate.name}</Link>&nbsp;
        <span>{pirate.role}</span>
        {crew && (
          <span> 
            &nbsp;on the <Link to={`/crews/${crew._id}`}>{crew.name}</Link> 
          </span>
        )}
        <RemoveButton onRemove={() => onRemove(pirate._id)}/>
      </li>
    );
  }
}

export default connect(
  state => ({ 
    pirates: state.piratesById,
    crews: state.crewsById
  }),
  null,
  ({ pirates, crews }, ignored, { pirateId, onRemove, showCrew }) => {
    const pirate = pirates[pirateId];

    return {
      pirate,
      crew: (showCrew && pirate.crew) ? crews[pirate.crew] : null,
      onRemove
    };
  }
)(PirateItem);