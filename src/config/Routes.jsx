import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import requireAuth from '../utils/requireAuth.js';
import App from '../components/App.jsx';
import Authentication from '../components/authentication/Authentication.jsx';
import Registration from '../components/authentication/Registration.jsx';
import Login from '../components/authentication/Login.jsx';

const routes = () => (
  <Router history={hashHistory} >
    <Route path="/" >
      <IndexRoute component={App} onEnter={requireAuth} />
      <Route path="welcome" component={Authentication} />
      <Route path="register" component={Registration} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);

export default routes;
