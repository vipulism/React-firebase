import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Sub Layouts
import Header from '../../staticComponents/header';
import Nav from '../../staticComponents/nav';
import Footer from '../../staticComponents/footer';

import Form from './component/form';

export default class Entryform extends Component {

  render() {
    return (
      <div className="container-fluid">
      <Header>
        <Nav />
      </Header>
        <Form />
     <Footer />
    </div>
      );
}
}