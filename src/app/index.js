import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import main scss file
// import '../scss/main.scss';

// import Module/components
import dashboard from '../modules/dashboard';
import AccountLayout from '../modules/login';
import signIn from '../modules/login/components/signIn';
import NotFound from './notFound';

export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={dashboard} />
              <Route  path="/account" component={AccountLayout} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
    );
  }
}
