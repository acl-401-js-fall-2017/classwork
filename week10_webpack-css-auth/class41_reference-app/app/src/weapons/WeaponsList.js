import React, { PureComponent } from 'react';
import Weapon from './Weapon';

class WeaponsList extends PureComponent {

  render() {
    const { weaponsIds } = this.props;
    if(!weaponsIds) return null;

    return (
      <ul>
        {weaponsIds.map(id => (
          <Weapon key={id} weaponId={id}/>
        ))}
      </ul>
    );
  }
}

export default WeaponsList;