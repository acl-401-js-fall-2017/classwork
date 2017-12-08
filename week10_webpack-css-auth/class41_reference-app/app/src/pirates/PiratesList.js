import React, { PureComponent } from 'react';
import Pirate from './Pirate';

class PiratesList extends PureComponent {

  render() {
    const { pirateIds, onRemove, showCrew } = this.props;
    if(!pirateIds) return null;

    return (
      <ul>
        {pirateIds.map(id => (
          <Pirate key={id} pirateId={id} onRemove={onRemove} showCrew={showCrew}/>
        ))}
      </ul>
    );
  }
}

export default PiratesList;