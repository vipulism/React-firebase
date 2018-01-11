import React, { Component } from 'react';
import dashboard from './dashboard';
import { valetData, valetV1Data } from '../../../modules/firebase';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changedStatus: "Reparked",
      updatedStatus : "",
      profileId:0
    }
  }

  getStatus(statusCode, style) {
    switch (statusCode) {
      case 1:
        return style ? 'table-success' : 'called for'
        break;
      case 2:
        return style ? 'table-danger' : 'waiting'
        break;
      case 3:
        return style ? 'table-warning' : 're-parked'
        break;
      case 4:
        return style ? 'table-parked' : 'parked'
        break;
      case 5:
        return style ? 'table-parked' : 'chekout'
        break;
      default:
        return '-'
        break;
    }
  }

  render() {
    return (
      <tr className={  this.getStatus(this.props.status, 'style') } >
        <td data-title="Name" >{this.props.name}</td>
        <td data-title="car no">{this.props.car}</td>
        <td data-title="model">{this.props.model}</td>
        <td data-title="Name">aaw111</td>
        <td data-title="cell">{this.props.cell}</td>
        <td data-title="status"> {this.getStatus(this.props.status)}</td>
        <td>
          <span className="dropdown pmd-dropdown dropup clearfix">
            <button className="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button" id="dropdownMenuTopRight" data-toggle="dropdown" aria-expanded="true">
              <i className="material-icons pmd-sm">more_vert</i></button>
            <ul aria-labelledby="dropdownMenu3" role="menu" className="dropdown-menu pmd-dropdown-menu-top-right">
              <li role="" ref="changedStatus" onClick={() => {this.setState({updatedStatus: this.state.changedStatus, profileId:  this.props.id});console.log(this.state.updatedStatus, this.state.profileId); this.props.update(this.state.profileId, this.state.updatedStatus);}}><a tabIndex="-1" role="menuitem">{this.state.changedStatus}</a></li>
            </ul></span></td>
      </tr>
    )
  }
}

export default Car;