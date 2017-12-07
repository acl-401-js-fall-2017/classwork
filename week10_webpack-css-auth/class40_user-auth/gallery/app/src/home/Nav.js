import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../auth/actions';
import styled from 'styled-components';

const NavList = styled.ul`
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  list-style-type: none;
  margin: 10px;
`;

const NavLink = props => <Link style={{ color: 'steelblue' }} {...props}/>;

function Nav({ user, signout }) {
  return (
    <nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/albums">Albums</NavLink></NavItem>
        <NavItem>
          { user 
            ? <NavLink to="/" onClick={signout}>Logout</NavLink>
            : <NavLink to="/auth/signin">Login</NavLink>
          }
        </NavItem>
      </NavList>
    </nav>
  );
}

export default connect(
  state => ({ user: state.auth.user }),
  { signout }
)(Nav);