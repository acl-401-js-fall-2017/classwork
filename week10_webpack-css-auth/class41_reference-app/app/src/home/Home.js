import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Welcome to Pirate Crews!</h1>
        <ul>
          <li>
            <Link to="/crews">Check out Pirate Crews!</Link>
          </li>
          <li>
            <Link to="/pirates">Check out Pirates!</Link>
          </li>
          <li>
            <Link to="/weapons">Check out Weapons!</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;