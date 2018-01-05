import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { valetData, valetV1Data, db } from '../../../modules/firebase';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {createNotification} from '../../../assets/js/notification';

export default class Form extends Component {
state = {
    name: 'd',
    cell_no: '',
    status: 1,
    car_no: '',
    car_modal: '',
    id: Math.random().toString(36).substr(2, 5)
  }

   createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  }
  componentDidMount() {
    //const val = Math.random().toString(36).substr(2, 5);
     valetV1Data.then((successMessage) => {
     // console.log(successMessage);
    }); 

     function check() {
       console.log(this.state);
     }
     function update(evt){
            this.setState({
      name: evt.target.value
    });
     }
 }
  render() {
    return (
<div id="content" className="pmd-content inner-page">
        <div className="container-fluid full-width-container">
 <div className="section section-custom billinfo">
                <h2>Entry Form</h2>
                <form id="validationForm" action="" method="post">
                    <div className="pmd-card pmd-z-depth">
                        <div className="pmd-card-body">
                            <div className="group-fields clearfix row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group pmd-textfield pmd-textfield-floating-label">
                                        <label htmlFor="regular1" className="control-label">
                  Name
                </label>
                                        <input type="text" id="regular1" ref="name" className="form-control name" onBlur={(name) => {this.setState({name : this.refs.name.value}); console.log(this.state.name);}} />
                                    </div>
                                </div>
                            </div>
                            <div className="group-fields clearfix row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group pmd-textfield pmd-textfield-floating-label">
                                        <label htmlFor="regular1" className="control-label">
                 Phone*
                 </label>
                                        <input type="text" id="regular1" ref="cell_no" className="form-control cell_no" onBlur={(cell_no) => {this.setState({cell_no : this.refs.cell_no.value}); console.log(this.state);}} />
                                    </div>
                                </div>
                            </div>

                            <div className="group-fields clearfix row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group pmd-textfield pmd-textfield-floating-label">
                                        <label htmlFor="regular1" className="control-label">
                 Status*
                 </label>
                                        <input type="number" id="regular1" ref="status" className="form-control status" onBlur={(status) => {this.setState({status: this.refs.status.value}); console.log(parseInt(this.state.status)); console.log( typeof this.state.status);}} />
                                    </div>
                                </div>
                            </div>
                            <div className="group-fields clearfix row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group pmd-textfield pmd-textfield-floating-label">
                                        <label htmlFor="regular1" className="control-label">
                  Car - No.*
                </label>
                                        <input type="text" id="regular1" ref="car_no" className="form-control car_no" onBlur={(car_no) => {this.setState({car_no: this.refs.car_no.value}); console.log(this.state);}} />
                                    </div>
                                </div>
                            </div>
                            <div className="group-fields clearfix row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group pmd-textfield pmd-textfield-floating-label">
                                        <label htmlFor="regular1" className="control-label">
                                    Model*
                                </label>
                                        <input type="text" id="regular1" ref="car_modal" className="form-control car_modal" onBlur={(car_modal) => {this.setState({car_modal: this.refs.car_modal.value}); console.log(this.state);}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pmd-card-actions">
                            <a href="javascript:void(0);" className="btn btn-primary next" onClick={() => {db.ref(`valet/v01/`+ this.state.id).set({ name: this.state.name,cell_no: this.state.cell_no,car_no: this.state.car_no, car_modal: this.state.car_modal, id: this.state.id, status:parseInt(this.state.status)});}}>Submit</a>
                        </div>

                        <div className="pmd-card-actions">
                            <a href="javascript:void(0);" className="btn btn-primary next" onClick={() =>{console.log(NotificationManager); NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);}}>Notification</a>
                        </div>
                    </div>
                   
                </form>
            </div>
           </div>
           </div>
      );
}
}