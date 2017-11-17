import React from 'react';
import { NavLink  } from 'react-router-dom';
import logo from './logo.svg';

const HeaderLink = props => <NavLink {...props} 
  className="nav-link" 
  activeClassName="active"
/>;

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">What 2 Do</h1>
      <nav>
        <li>
          <HeaderLink exact to="/">Home</HeaderLink>
        </li>
        <li><HeaderLink to="/tasks">Tasks</HeaderLink></li>
      </nav>
    </header>
  );
}