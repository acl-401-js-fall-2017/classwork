import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeWeapon } from './actions';
import RemoveButton from '../common/RemoveButton';

class Weapon extends PureComponent {

  render() {
    const { weapon, removeWeapon } = this.props;
    return (
      <li>
        <span>{weapon.name}</span>&nbsp;
        <span>(damage: {weapon.damage})</span>
        <RemoveButton onRemove={removeWeapon}/>
      </li>
    );
  }
}

export default connect(
  state => ({ 
    weapons: state.weaponsById
  }),
  { removeWeapon },
  ({ weapons }, { removeWeapon }, { weaponId }) => ({
    weapon: weapons[weaponId],
    removeWeapon: () => removeWeapon(weaponId)
  })
)(Weapon);