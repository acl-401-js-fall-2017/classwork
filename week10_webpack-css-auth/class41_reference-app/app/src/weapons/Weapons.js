import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AddItem from '../common/AddItem';
import WeaponsList from './WeaponsList';
import { addWeapon, loadWeapons } from './actions';

class Weapons extends PureComponent {

  componentDidMount() {
    this.props.loadWeapons();
  }

  render() {
    const { weaponsIds, addWeapon } = this.props;
    return (
      <section>
        <h2>Weapons</h2>
        <AddItem type="weapon" onAdd={addWeapon}>
          <div>
            <label>Damage: <input name="damage" type="number"/></label>
          </div>
        </AddItem>
        <WeaponsList weaponsIds={weaponsIds}/>
      </section>
    );
  }
}

export default connect(
  state => ({ 
    weaponsIds: state.weapons || []
  }),
  { addWeapon, loadWeapons }
)(Weapons);