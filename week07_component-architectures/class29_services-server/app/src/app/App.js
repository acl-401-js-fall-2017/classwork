import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  Link  } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Lists from '../lists/Lists';
import Tasks from '../tasks/Tasks';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/tasks" component={Lists}/>
            <Route path="/tasks/:id" component={Tasks}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Welcome to the Task Lists!</h1>
    <Link to="/tasks">View the List of Tasks</Link>
  </div>
);

export default App;
