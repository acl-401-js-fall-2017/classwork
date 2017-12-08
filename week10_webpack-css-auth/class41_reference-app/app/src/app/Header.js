import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends PureComponent {
  
  render() {
    return (
      <header>
        <h1 className="App-title">Pirates FTW!</h1>
        <nav>
          <span><NavLink to="/home">Home</NavLink></span>&nbsp;
          <span><NavLink to="/crews">Crews</NavLink></span>&nbsp;
          <span><NavLink to="/pirates">Pirates</NavLink></span>&nbsp;
          <span><NavLink to="/weapons">Weapons</NavLink></span>&nbsp;
        </nav>
      </header>
    );
  }
}

export default connect(
  null,
  null
)(Header);