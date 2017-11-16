import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  Link  } from 'react-router-dom';
import './App.css';
import Header from './Header';
import ListOfTodos from './ListOfTodos';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/todos" component={ListOfTodos}/>
            <Route path="/todos/:id" component={TodoList}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Welcome to the Todo Lists!</h1>
    <Link to="/todos">View the List of Todos</Link>
  </div>
);

export default App;
