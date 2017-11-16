import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, Switch, Redirect,
  NavLink, Link  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ListOfTodos from './ListOfTodos';
import TodoList from './TodoList';

const OurNavLink = props => <NavLink {...props} activeStyle={{ color: 'white' }}/>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <nav>
              <li>
                <OurNavLink exact to="/">Home</OurNavLink>
              </li>
              <li><OurNavLink to="/todos">Todos</OurNavLink></li>
            </nav>
          </header>
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
