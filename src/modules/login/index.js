import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Sub Layouts
import Header from '../../staticComponents/header';
import Nav from '../../staticComponents/nav';
import SimpleFooter from '../../staticComponents/footer';

// Components
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Reset from './components/reset';
import NotFound from '../../app/notFound';


const AccountLayout = ({ match }) => (
  <div className="container-fluid row-no-padding">
    {/* {match.path === "/account" ? <Header /> : ''}
    {match.path === "/account" ? <Nav /> : ''} */}
    <Switch>
      <Route path={`${match.path}/signin`} component={SignIn} />
      <Route path={`${match.path}/signup`} component={SignUp} />
      <Route path={`${match.path}/reset`} component={Reset} />
      {/* <Route component={NotFound} /> */}
    </Switch>
    {/* {match.path === "/account" ? <SimpleFooter /> : ''} */}
  </div>
)

 export default AccountLayout;
