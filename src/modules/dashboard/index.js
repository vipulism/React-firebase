import React from 'react';
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
    <switch>
      <Route path={`${match.path}`} component={dashboard} />
    </switch>
    <Footer />
  </div>
)
 export default dashboardLayout;
