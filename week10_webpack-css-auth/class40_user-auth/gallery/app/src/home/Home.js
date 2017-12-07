import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const GetStarted = () => (
  <p>
    <Link to="/auth/signin">Sign in</Link>
    {' or '} 
    <Link to="/auth/signup">Sign up</Link>
    {' to get started.'}
  </p>
);

const WelcomeGreeting = ({ name }) => (
  <p>Welcome {name}! <Link to="/albums">View your albums</Link>.</p>
);

function Home({ user }) {
  return (
    <div>
      <h1>Welcome to Image Gallery+</h1>
      { user ? <WelcomeGreeting name={user.name}/> : <GetStarted/> }
    </div>
  );
}

export default connect(
  state => ({ user: state.auth.user }),
  null
)(Home);