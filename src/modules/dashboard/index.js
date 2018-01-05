import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

// Sub Layouts
import Header from '../../staticComponents/header';
import Nav from '../../staticComponents/nav';
import Footer from '../../staticComponents/footer';

// Components
import Dashboard from './components/dashboard';
import Form from '../../modules/entryform/component/form';

import { valetV1Data } from '../../modules/firebase';
class dashboardLayout extends Component {
  constructor(){
     super();
     this.state = {
       totalCallFor:0
     }

      this.updateStatus = this.updateStatus.bind(this);
   }


   updateStatus(e){
         valetV1Data.then((successMessage) => {
                this.setState({ totalCallFor: successMessage });
     // console.log(successMessage);
    }); 

   }


 
 
   render(){
    return  (
      <div className="container-fluid">
      <Header>
        <Nav totalCallFor={ this.state.totalCallFor } />
      </Header>
      <Switch>
        {/* <Route path={`${match.path}`} component={initFirebase(dashboard)} /> */}
        <Route exact path="/" render={ () => <Dashboard fun={this.updateStatus} totalCallFor={this.state.totalCallFor} /> } />
        <Route path="/entry" render={ () => <Form fun={this.updateStatus} totalCallFor={this.state.totalCallFor} /> } />
      </Switch>
      <Footer />
    </div>
    )
    }
   }
  


export default dashboardLayout;
