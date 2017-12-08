import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


// Sub Layouts
import Header from '../../staticComponents/header';
import Nav from '../../staticComponents/nav';
import Footer from '../../staticComponents/footer';

// Components
import dashboard from './components/dashboard';


const dashboardLayout = ({ match }) => (
  <div className="container-fluid">
    <Header>
      <Nav />
    </Header>
    <Switch>
      {/* <Route path={`${match.path}`} component={initFirebase(dashboard)} /> */}
      <Route path={`${match.path}`} component={dashboard} />
    </Switch>
    <Footer />
  </div>
)

export default dashboardLayout;
