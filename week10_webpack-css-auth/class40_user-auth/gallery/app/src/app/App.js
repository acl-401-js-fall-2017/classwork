import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';

import Routes from './Routes';
import Nav from '../home/Nav';

const Header = ({ user }) => (
  <div className="App-header">
    <h1>Image Albums {user && `for ${user.name}`}</h1>
    <Nav/>
  </div>
);

class App extends Component {

  componentDidMount() {
    this.props.checkForToken();
  }

  render() {
    const { user, checkedToken } = this.props;
    return (
      <Router>
          { checkedToken &&
            <div className="App">
              <Header user={user}/>
              <main>
                <Routes/>
              </main>
            </div>
          }
      </Router>
    );
  }
}

export default connect(
  ({ auth }) => ({ 
    user: auth.user,
    checkedToken: auth.checkedToken
  }),
  { checkForToken }
)(App);