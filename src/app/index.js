import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jquery from 'jquery';



// import main scss file
import '../assets/css/bootstrap.css';
import '../assets/css/propeller.min.css';
import '../assets/css/style.css';
import '../components/datetimepicker/css/bootstrap-datetimepicker.css';
import '../themes/css/propeller-theme.css';
import '../themes/css/propeller-admin.css';

// import Module/components
import DashboardLayout from '../modules/dashboard';
import AccountLayout from '../modules/login';
import signIn from '../modules/login/components/signIn';
import NotFound from './notFound';

// import 'bootstrap/dist/js/bootstrap';

window.jQuery = jquery;
// window.$ = require('../assets/js/jquery'); 
// window.$ = require('../assets/js/jquery-1.12.2.min.js');
let Bootstrap = require('bootstrap');

let propeller = require('../assets/js/propeller'); 

const dd = 'asdasd'


export default class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
              <Route exact path="/" component={ DashboardLayout } somthing="asdasd" />
              <Route  path="/account" component={AccountLayout} />
              <Route component={NotFound} />
            </Switch>
        </Router>
    );
  }
}
