import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './Header';
import Error from './Error';
import Loading from './Loading';
import Home from '../home/Home';
import Crews from '../crews/Crews';
import CrewDetail from '../crews/CrewDetail';
import Pirates from '../pirates/Pirates';
import PirateDetail from '../pirates/PirateDetail';
import Weapons from '../weapons/Weapons';

class App extends Component {
  
  render() {
    const { loading, error } = this.props;

    return (
      <Router>
        <div className="App">
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/crews" component={Crews}/>
              <Route path="/crews/:id" render={({ match }) => <CrewDetail crewId={match.params.id}/>}/>
              <Route exact path="/pirates" component={Pirates}/>
              <Route path="/pirates/:id" render={({ match }) => <PirateDetail pirateId={match.params.id}/>}/>
              <Route exact path="/weapons" component={Weapons}/>
              <Redirect to="/"/>
            </Switch>
            <Loading loading={loading}/>
            <Error error={error}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error
  }),
  null
)(App);