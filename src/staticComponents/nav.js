import React, { Component } from 'react';



export default class Nav extends Component {

  constructor(props){
    super(props);
    this.state = {
      hamburger : props.hamburger
    }
  }
  
  render() {
    return (
        <aside id="adide" className={this.props.hamburger ? 'pmd-sidebar sidebar-default pmd-sidebar-slide-push pmd-sidebar-left  sidebar-with-icons pmd-sidebar-open' : 'pmd-sidebar sidebar-default pmd-sidebar-slide-push pmd-sidebar-left  sidebar-with-icons' } role="navigation" >
          <ul className="nav pmd-sidebar-nav">
            <li className="dropdown pmd-dropdown pmd-user-info visible-xs visible-md visible-sm visible-lg">
              <a aria-expanded="false" data-toggle="dropdown" className="btn-user dropdown-toggle media" data-sidebar="true" aria-expanded href="javascript:void(0);">
                <div className="media-left ntwrk-status ntwrk-on">
                  <img src={require('../themes/images/user-icon.png')} alt="New User" />
                    </div>
                  <div className="media-body media-middle">Shahid Devgan
                  <div className="pmd-card-subtitle-text">
                    <span>Change Password</span> &nbsp;|&nbsp; <span>Logout</span>
                  </div>
                  </div>
                </a>
            </li>
            <li>
                <a className="pmd-ripple-effect" href="index.html">
                  <i className="media-left media-middle"><svg version="1.1" x="0px" y="0px" width="19.83px" height="18px" viewBox="287.725 407.535 19.83 18" enableBackground="new 287.725 407.535 19.83 18" space="preserve">
<g>
                      <path fill="#fff" d="M307.555,407.535h-9.108v10.264h9.108V407.535z M287.725,407.535v6.232h9.109v-6.232H287.725z
                        M296.834,415.271h-9.109v10.264h9.109V415.271z M307.555,419.303h-9.108v6.232h9.108V419.303z"/>
</g>
</svg></i>
                <span className="media-body">Dashboard</span>
                </a>
            </li>
            <li>
              <a className="pmd-ripple-effect" href="form.html">
                <i className="media-left media-middle"><svg version="1.1" x="0px" y="0px" width="14.187px" height="18px" viewBox="0 0 14.187 18" enableBackground="new 0 0 14.187 18" space="preserve">
<path fill="#fff" d="M0,0v18h14.187V0H0z M3.121,3.293h2.023v4.767H3.121V3.293z M11.211,14.764H2.948v-2.022h8.263V14.764
                    L11.211,14.764z M11.211,11.585H2.948V9.563h8.263V11.585L11.211,11.585z M11.211,8.407H7.455V6.385h3.756V8.407z M11.211,5.229
	H7.455V3.207h3.756V5.229z"/>
</svg></i>
              <span className="media-body">Entry Form</span>
              <div className="media-right media-bottom"><i className="dic-more-vert dic"></i></div>
                </a>
            </li>
          <li>
            <a className="pmd-ripple-effect" href="notifications.html">
              <i className="media-left media-middle">
                <svg version="1.1" id="Layer_1" x="0px" y="0px" width="15.3px" height="18px" viewBox="289.99 337.535 15.3 18" enableBackground="new 289.99 337.535 15.3 18" space="preserve">
                    <g>
                  <g>
                    <path fill="#C9C8C8" d="M297.64,355.535c0.99,0,1.8-0.81,1.8-1.8h-3.6C295.84,354.725,296.65,355.535,297.64,355.535z
                      M303.49,350.135v-4.95c0-2.79-1.891-5.041-4.501-5.67v-0.63c0-0.72-0.63-1.35-1.35-1.35c-0.72,0-1.35,0.63-1.35,1.35v0.63
                                c-2.61,0.629-4.5,2.88-4.5,5.67v4.95l-1.8,1.8v0.9h15.3v-0.9L303.49,350.135z"/>
                        </g>
                </g>
                </svg></i>
            <span className="media-body">Checked out</span>
            </a> 
        </li>
        </ul>
    </aside>
    );
  }
}
