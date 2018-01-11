import React, { Component } from 'react';
import Car from './car_entry';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { valetData, valetV1Data } from '../../../modules/firebase';


export default class dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      filteredCars: [],
      call_for: 0,
      fillterBy: 'cell_no',
      profileId: '',
      updatedStatus: ''
    }

    this.update = this.update.bind(this);
  }

  update(e, f){
    this.setState({profileId: e, updatedStatus: f});
  }
  componentDidMount() {

    //console.log(this.props.fun);
    this.props.fun();
    var self = this;
    var cars = {};

    function sort(cars) {

      var newCars = [];

      Object.keys(cars).map(item => {
        newCars.push(cars[item]);
      })

      newCars.sort(function (a, b) {
        return a.status - b.status
      })

      console.log(newCars);
      const totalCallFor = newCars.filter(item => item.status === 2).length;

      self.setState({ cars: newCars, filteredCars: newCars, call_for: totalCallFor });
     

    }
    valetData('v01').on('value', function (res) {

      cars = res.val();
      Object.keys(cars).map( item => {
        cars[item].statusVal = self.getStatus(cars[item].status);
      });
      //self.setState({ cars })
      sort(cars);
    });

     valetV1Data.then((successMessage) => {
     // console.log(successMessage);
    }); 
    //console.log(myFirstPromise());
  }

  applyFilterCars() {
    const cars = this.state.cars;
    const val = this.refs.searchInput.value; //e.target.value.toLocaleLowerCase();

    if (val) {
      const fillterBy = this.state.fillterBy == 'status' ? 'statusVal' : this.state.fillterBy;
      
      let filtterResult = cars.filter(item => {
        return item[fillterBy].toString().indexOf(val) != -1;
      });
      
      this.setState({ filteredCars: filtterResult });
      
    } else {
      this.setState({ filteredCars: cars });
    }

  }

  getStatus(statusCode) {
    switch (statusCode) {
      case 1:
        return 'called for'
        break;
      case 2:
        return 'waiting'
        break;
      case 3:
        return 're-parking'
        break;
      case 4:
        return 'parked'
        break;
      case 5:
        return 'chekout'
        break;
      default:
        return '-'
        break;
    }
  }

  changeFilter(e) {
    var fillterBy = e.target.value.toLocaleLowerCase();
    this.setState({ fillterBy: fillterBy }, () => this.applyFilterCars());
  }


  render() {
    return (
      <main>
        <div id="content" className="pmd-content content-area dashboard">
          <div className="container-fluid">
            <div className="row" id="card-masonry">
              <div className="action-bar row">
                <div className="col-lg-12 col-xs-12">
                  <h2>Customers Data</h2>
                </div>
                <div className="col-lg-12 col-xs-12">
                  <div className="form-group pLeft0 col-sm-4">
                    <select value={this.state.fillterBy} onChange={(e) => this.changeFilter(e)} className="form-control">
                      <option value="cell_no">Cell</option>
                      <option value="name">Name</option>
                      <option value="car_modal">Model</option>
                      <option value="status">Status</option>
                      <option value="car_no">Car Number</option>
                    </select>

                  </div>
                  <div className="form-group icon-right col-sm-7">
                    <div className="floatinglabels pmd-textfield">
                      <input ref="searchInput" type="text" onBlur={() => this.applyFilterCars()} onKeyUp={(e) => this.applyFilterCars(e)} placeholder="Search..." className="form-control" /><span className="pmd-textfield-focused"></span>
                      <span className="dic dic-search">&nbsp;</span>
                    </div>
                  </div>

                  <div className="form-group icon-right col-sm-1"><NavLink to="/entry"> <i class="material-icons pmd-md add-icon">add</i></NavLink></div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="component-box">
                  <div className="pmd-card pmd-z-depth pmd-card-custom-view">
                    <div className="table-responsive">
                      <table className="table pmd-table table-striped table-mc-red">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Car - No.</th>
                            <th>Model</th>
                            <th>Slip - No.</th>
                            <th>Cell</th>
                            <th>Status</th>
                          </tr>

                          {this.state.filteredCars.map(item => <Car
                            name={item.name}
                            key={item.id}
                            id={parseInt(item.id)}
                            cell={parseInt(item.cell_no)}
                            model={item.car_modal}
                            car={item.car_no}
                            status={item.status}
                            statusVal={this.getStatus(parseInt(item.status))} update={this.update}
                          />)}

                          {/* { this.state.cars.map(item => <Car
                            name={this.state.cars[item].name}
                            key={this.state.cars[item].id}
                            id={this.state.cars[item].id}
                            cell={this.state.cars[item].cell_no}
                            model={this.state.cars[item].car_modal}
                            car={this.state.cars[item].car_no}
                            status={this.state.cars[item].status}
                          />) } */}

                        </thead>
                        <tbody className="content">
                        </tbody>
                      </table>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}