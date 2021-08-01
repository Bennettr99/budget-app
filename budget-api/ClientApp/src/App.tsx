import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import { config } from './config';
import { Login } from './components/Login/Login';

const CALLBACK_PATH = '/login/callback'

const oktaAuth = new OktaAuth(config);

function App() {
  return (
    <Router>
      {/* TODO: Figure out what restoreOriginalUri is supposed to be  */}
      <Security oktaAuth={oktaAuth} restoreOriginalUri={() => { }}>
        <Route path={CALLBACK_PATH} component={LoginCallback} />
        <Route exact path="/login" component={Login} />
        <SecureRoute exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Security>
    </Router>
  );
}

export default App;
