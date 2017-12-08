import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeCrew } from './actions';
import { Link } from 'react-router-dom';
import RemoveButton from '../common/RemoveButton';

class CrewItem extends PureComponent {

  render() {
    const { crew, removeCrew } = this.props;
    return (
      <li>
        <Link to={`/crews/${crew._id}`}>{crew.name}</Link>
        <RemoveButton onRemove={removeCrew}/>
      </li>
    );
  }
}

export default connect(
  state => ({ 
    crews: state.crewsById
  }),
  { removeCrew },
  ({ crews }, { removeCrew }, { crewId }) => ({
    crew: crews[crewId],
    removeCrew: () => removeCrew(crewId)
  })
)(CrewItem);