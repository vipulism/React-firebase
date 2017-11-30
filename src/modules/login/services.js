import { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { get, post } from '../../utils/httpRequests';
import { APIs } from '../../utils/apis';

/**
 * Handler for SignIn actions
 */
const signInHandler = (props, query) => (dispatch) => {

  // post({url: APIs.LOGIN, data: query})
  //   .then((response) => {
  //       if (!response) {
  //         throw Error(response.statusText);
  //       }
  //   })
  //   .catch( );
}
 
 
export default signInHandler;
