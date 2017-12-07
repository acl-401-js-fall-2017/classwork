import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from '../home/Home';
import Auth from '../auth/Auth';
import Albums from '../albums/AlbumsContainer';
import AlbumDetail from '../album/AlbumDetailContainer';

import PrivateRoute from './PrivateRoute';

export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Home/>}/>;
    <Route path="/auth" render={() => <Auth/>}/>
    <PrivateRoute exact path="/albums" component={Albums}/>;
    <PrivateRoute path="/albums/:id" render={({ match }) => <AlbumDetail id={match.params.id}/>}/>;
    <Redirect to="/"/>
  </Switch>  
);
