import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPirate, removePirate, updatePirate } from './actions';
import WeaponsList from '../weapons/WeaponsList';
import RemoveButton from '../common/RemoveButton';

class PirateDetail extends PureComponent {

  componentDidMount() {
    this.props.loadPirate();
  }
  render() {
    const { pirate, crew, removePirate } = this.props;
    if(!pirate) return null;

    return (
      <article>
        <h2>
          {pirate.name}
          <RemoveButton onRemove={removePirate}/>
        </h2>
        { crew && (
          <p>
            {pirate.role} of the <Link to={`/crews/${crew._id}`}>{crew.name}</Link> 
          </p>
        )}
        <h3>Weapons</h3>
        <WeaponsList weaponsIds={pirate.weapons}/>
      </article>
    );
  }
}

export default connect(
  state => ({ 
    pirates: state.piratesById,
    crews: state.crewsById    
  }),
  { loadPirate, removePirate, updatePirate },
  ({ pirates, crews }, { loadPirate, removePirate, updatePirate }, { pirateId }) => {
    const pirate = pirates[pirateId];
    return {
      pirate,
      crew: pirate && pirate.crew ? crews[pirate.crew._id] : null,      
      loadPirate: () => loadPirate(pirateId),
      removePirate: () => removePirate(pirateId),
      updatePirate
    };
  }
)(PirateDetail);