import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Redirect, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { config } from './config';
import { Login } from './components/Login/Login';

const CALLBACK_PATH = '/login/callback'

const oktaAuth = new OktaAuth(config);

class App extends React.Component<RouteComponentProps<any>> {
  restoreOriginalUri = async (_oktaAuth: OktaAuth, originalUri: string) => {
    this.props.history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };
  render() {
    return (
      <Router>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={this.restoreOriginalUri}>
          <Route exact path="/login" component={Login} />
          <SecureRoute exact path="/home" component={Home} />
          <Route path={CALLBACK_PATH} component={LoginCallback} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Security>
      </Router>
    );
  }
}

const AppWithRouterAccess = withRouter(App);
export default class BudgetApp extends React.Component {
  render() {
    return (<Router><AppWithRouterAccess/></Router>);
  }
}