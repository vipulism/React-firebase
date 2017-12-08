import React, { Component } from 'react';


export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login:true,
      reset:false,
      signup:false
    }
  }
  EntrySignup(e) {
    e.preventDefault(); 
    console.log('enter signip');
  }
  EntryLogin(e) {
    e.preventDefault(); 
    console.log('enter login');
  }
  changeStateTo(state){
    this.setState({
      login:state == 'login',
      reset:state == 'reset',
      signup:state == 'signup'
    });
  }
  render() {
    return (
      <div className="logincard">
        <div className="pmd-card card-default pmd-z-depth">
          <div className={ this.state.login  ? 'login-card' : 'login-card hide' }>
            <form>
              <div className="pmd-card-title card-header-border text-center">
                <div className="loginlogo">
                  <a href="javascript:void(0);"><img src={ require('../../../assets/images/dlf.png') } alt="Logo" className="logo" /></a>
                </div>
                <h3>Sign In <span>with <strong>DLF</strong></span></h3>
              </div>

              <div className="pmd-card-body">
                <div className="alert alert-success" role="alert"> Oh snap! Change a few things up and try submitting again. </div>
                <div className="form-group pmd-textfield pmd-textfield-floating-label">
                  <label htmlFor="inputError1" className="control-label pmd-input-group-label">Username</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">perm_identity</i></div>
                    <input type="text" className="form-control loginName" id="exampleInputAmount" />
                  </div>
                </div>

                <div className="form-group pmd-textfield pmd-textfield-floating-label">
                  <label htmlFor="inputError1" className="control-label pmd-input-group-label">Password</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">lock_outline</i></div>
                    <input type="text" className="form-control loginPassword" id="exampleInputAmount" />
                  </div>
                </div>
              </div>
              <div className="pmd-card-footer card-footer-no-border card-footer-p16 text-center" >
                <div className="form-group clearfix">
                  <div className="checkbox pull-left">
                    <label className="pmd-checkbox checkbox-pmd-ripple-effect">
                      <input type="checkbox" checked="" value="" />
                      <span className="pmd-checkbox"> Remember me</span>
                    </label>
                  </div>
                  <span className="pull-right forgot-password">
                    <a href="javascript:void(0);" onClick={ () => this.changeStateTo('reset')  } >Forgot password?</a>
                  </span>
                </div>
                <a href="#" type="button" className="btn pmd-ripple-effect btn-primary btn-block loginButton" onClick={(e) => this.EntryLogin(e)}>Login</a>
                <p className="redirection-link"> Don't have an account? <a href="javascript:void(0);" className="login-register loginSignup" onClick={ () => this.changeStateTo('signup')  }>Sign Up</a>. </p>
              </div>

            </form>
          </div>

          <div className={ this.state.signup  ? 'register-card' : 'register-card hide' }>
            <div className="pmd-card-title card-header-border text-center">
              <div className="loginlogo">
                <a href="javascript:void(0);"><img src={ require('../../../assets/images/dlf.png') } alt="Logo" className="logo" /></a>
              </div>
              <h3>Sign Up <span>with <strong>PROPELLER</strong></span></h3>
            </div>
            <form>
              <div className="pmd-card-body">

                <div className="form-group pmd-textfield pmd-textfield-floating-label">
                  <label htmlFor="inputError1" className="control-label pmd-input-group-label" >Username</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">perm_identity</i></div>
                    <input type="text" className="form-control" id="exampleInputAmount" />
                  </div>
                </div>

                <div className="form-group pmd-textfield pmd-textfield-floating-label" >
                  <label htmlFor="inputError1" className="control-label pmd-input-group-label" >Email address</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">email</i></div>
                    <input type="text" className="form-control" id="exampleInputAmount" />
                  </div>
                </div>

                <div className="form-group pmd-textfield pmd-textfield-floating-label" >
                  <label htmlFor="inputError1" className="control-label pmd-input-group-label">Password</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">lock_outline</i></div>
                    <input type="text" className="form-control" id="exampleInputAmount" />
                  </div>
                </div>
              </div>

              <div className="pmd-card-footer card-footer-no-border card-footer-p16 text-center">
                <a href="index.html" type="button" className="btn pmd-ripple-effect btn-primary btn-block" onClick={() => this.EntrySignup()}>Sign Up</a>
                <p className="redirection-link">Already have an account? <a href="javascript:void(0);" onClick={ () => this.changeStateTo('login')  } className="register-login">Sign In</a>. </p>
              </div>
            </form>
          </div>

          <div className={ this.state.reset  ? 'forgot-password-card' : 'forgot-password-card hide' } >
            <form>
              <div className="pmd-card-title card-header-border text-center">
                <div className="loginlogo">
                  <a href="javascript:void(0);"><img src={ require('../../../assets/images/dlf.png') } alt="Logo" className="logo" /></a>
                </div>
                <h3>Forgot password?<br /><span>Submit your email address and we'll send you a link to reset your password.</span></h3>
              </div>
              <div className="pmd-card-body">
                <div className="form-group pmd-textfield pmd-textfield-floating-label">
                  <label htmlFor="inputError1" className="control-label pmd-input-group-label">Email address</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">email</i></div>
                    <input type="text" className="form-control" id="exampleInputAmount" />
                  </div>
                </div>
              </div>
              <div className="pmd-card-footer card-footer-no-border card-footer-p16 text-center">
                <a href="index.html" type="button" className="btn pmd-ripple-effect btn-primary btn-block">Submit</a>
                <p className="redirection-link">Already registered? <a href="javascript:void(0);"  onClick={ () => this.changeStateTo('login')  }  className="register-login">Sign In</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>


    )
  }
}

