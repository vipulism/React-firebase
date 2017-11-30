import React, { Component } from 'react';

export default class SimpleFooter extends Component {
  render() {
    return (
      <footer className="footer mrgTop-60 pdLeft40 pdTop-70"
        style={{ backgroundColor: '#fff' }}>
        <div className="row">
          <div className="col-md-24">
            <div className="col-md-10">
              <p className="copyright">© Copyright Discern Living Technologies
                Pvt. Ltd. |  All Rights Reserved <span className="pull-right">
                   Terms Of Use  |  Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
