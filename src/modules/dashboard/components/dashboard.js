import React, { Component } from 'react';
import Car from './car_entry';

import { valetData } from '../../../modules/firebase';


export default class dashboard extends Component {

  constructor() {
    super();
    this.state = {
      cars: [],
      call_for: 0
    }
  }
  componentDidMount() {

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
      const totalCallFor = newCars.filter( item => item.status === 2 ).length;
      console.log(totalCallFor);
      
      self.setState({ cars: newCars, call_for: totalCallFor })

    }
    valetData('v01').on('value', function (res) {
      console.log();
      cars = res.val();
      //self.setState({ cars })
       sort(cars);
    });


  }

  filterCars(filterby){

    const cars = this.state.cars;
     filterby = filterby.target.value;
    
    if(filterby){

      let filtterResult = cars.filter(item => {
        console.log(filterby);
        return item.cell_no.toString().indexOf(filterby) != -1
      })
  
      this.setState({ cars : filtterResult});
    }else{
      console.log(cars);
      
      this.setState({ cars });
    }

    //console.log(filtterResult);
    

  }

  render() {
    // const { dashboard } = this.props;
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
                    <select className="form-control">
                      <option>Cell</option>
                      <option>Name</option>
                      <option>Model</option>
                      <option>Status</option>
                      <option>Car-no.</option>
                    </select>
                  </div>
                  <div className="form-group icon-right col-sm-8">
                    <div className="floatinglabels pmd-textfield">
                      <input type="text"  onChange={ (e) => this.filterCars(e) } placeholder="Search..." className="form-control" /><span className="pmd-textfield-focused"></span>
                      <span className="dic dic-search">&nbsp;</span>
                    </div>
                  </div>
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

                          {this.state.cars.map(item => <Car
                            name={item.name}
                            key={item.id}
                            id={item.id}
                            cell={item.cell_no}
                            model={item.car_modal}
                            car={item.car_no}
                            status={item.status}
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
