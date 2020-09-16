import React from 'react';
import Login from './components/authentication/login/index';
import { Route, Switch } from 'react-router-dom';
import Contacts from './components/authentication/userDetails';
import Password from '../src/components/authentication/password/index';

const Routes = () => (
  <Switch>
   
    <Route
      exact
      path='/login'
      name='Login'
      component={Login}
    />
      <Route
      exact
      path='/password'
      name='Password'
      component={Password}
    />

      <Route
      exact
      path='/'
      name='Contact'
      component={Contacts}
    />

   
  </Switch>
);

export default Routes;


