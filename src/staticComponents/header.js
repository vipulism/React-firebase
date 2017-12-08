import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

  constructor() {
    super()
    const hamburger = document.getElementById('hamburger');
    const aside = document.getElementById('aside');
    this.state = {
      hamburger: false
    }
  }

  toggleNav(e) {
    e.preventDefault();
    let {hamburger} = this.state;
    this.setState({ hamburger: (hamburger ? false : true)});
  }

  render() {

    const self = this;
    const { children } = this.props;
    let childrens = {};
    if (children) {
      childrens = React.Children.map(children, child => React.cloneElement(child, {
        hamburger: self.state.hamburger
      }));
    } else {
      childrens = children;
    }


    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top pmd-navbar pmd-z-depth">
          <div className="container-fluid">
            <div className="pmd-navbar-right-icon pull-right navigation">
              <div className="dropdown notification icons pmd-dropdown">
                <a href="#" className="dropdown-toggle pmd-ripple-effect header-icon center" role="button" aria-expanded="true">
                  <div className="">DLF Promenade</div>
                </a>
              </div>
            </div>
            <div className="navbar-header">
              <a href="#" id="hamburger" onClick={(e) => this.toggleNav(e)} className="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pull-left margin-r8 pmd-sidebar-toggle"><i className="material-icons">menu</i></a>
              <a href="index.html" className="navbar-brand">
                <svg version="1.1" x="0px" y="0px" width="100.16px" height="48px" viewBox="0 0 805 287" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="#ffffffff">
                  </g>
                  <g id="#1b1b1bff">
                    <path fill="#fff" opacity="1.00" d=" M 643.41 0.74 C 649.32 9.95 654.28 19.75 659.83 29.18 C 671.33 49.51 682.87 69.80 694.36 90.14 C 660.50 90.19 626.64 90.16 592.79 90.15 C 609.60 60.31 626.57 30.57 643.41 0.74 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 6.43 279.26 C 17.22 214.79 27.79 150.29 38.73 85.85 C 59.49 85.96 80.26 85.86 101.03 85.89 C 118.57 85.98 136.42 85.09 153.57 89.55 C 167.61 92.98 181.24 100.26 189.90 112.12 C 199.60 125.19 202.53 141.98 202.29 157.93 C 202.00 179.78 196.26 201.35 187.17 221.14 C 180.34 235.36 170.77 248.47 158.25 258.21 C 143.59 269.74 125.38 276.14 106.95 278.21 C 96.03 279.57 85.00 279.22 74.01 279.26 C 51.48 279.26 28.96 279.26 6.43 279.26 M 90.34 131.04 C 84.60 165.40 78.89 199.76 73.16 234.12 C 83.92 233.93 95.00 235.04 105.40 231.61 C 116.94 228.22 126.44 219.62 132.00 209.08 C 139.59 194.68 142.24 178.16 142.52 162.04 C 142.34 153.15 140.85 142.41 132.48 137.39 C 119.91 129.59 104.46 131.28 90.34 131.04 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 231.14 85.90 C 250.87 85.89 270.61 85.89 290.35 85.90 C 282.11 135.31 273.88 184.72 265.66 234.13 C 292.77 234.10 319.88 234.14 346.99 234.11 C 344.47 249.16 342.02 264.23 339.43 279.28 C 292.60 279.23 245.77 279.27 198.94 279.26 C 209.64 214.80 220.39 150.35 231.14 85.90 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 387.96 85.90 C 434.82 85.89 481.67 85.89 528.53 85.90 C 526.06 100.93 523.50 115.94 521.04 130.97 C 493.92 131.14 466.80 130.98 439.67 131.06 C 437.74 142.77 435.77 154.48 433.82 166.19 C 455.40 166.18 476.98 166.28 498.56 166.14 C 496.22 181.21 493.54 196.23 491.12 211.30 C 469.52 211.35 447.91 211.29 426.31 211.33 C 422.55 233.97 418.74 256.61 415.01 279.26 C 395.26 279.25 375.52 279.27 355.77 279.25 C 366.50 214.80 377.28 150.36 387.96 85.90 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 596.75 96.95 C 627.97 96.93 659.19 96.96 690.41 96.94 C 674.83 124.50 659.17 152.01 643.60 179.57 C 627.92 152.07 612.33 124.51 596.75 96.95 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 540.24 182.86 C 556.54 154.24 572.73 125.55 589.02 96.92 C 605.31 125.57 621.53 154.27 637.83 182.92 C 605.30 182.89 572.77 183.00 540.24 182.86 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 649.18 182.89 C 665.47 154.26 681.66 125.56 697.96 96.92 C 714.24 125.58 730.50 154.25 746.75 182.93 C 714.22 182.89 681.70 182.98 649.18 182.89 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 536.42 189.65 C 553.48 219.44 570.34 249.36 587.26 279.23 C 553.39 279.25 519.53 279.25 485.67 279.23 C 502.56 249.35 519.53 219.53 536.42 189.65 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 544.22 189.70 C 575.45 189.75 606.68 189.70 637.91 189.72 C 622.59 216.84 607.14 243.89 591.86 271.03 C 591.39 272.82 590.13 271.13 589.88 270.33 C 574.73 243.41 559.41 216.59 544.22 189.70 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 649.26 189.73 C 680.48 189.71 711.71 189.72 742.94 189.72 C 727.33 217.27 711.71 244.81 696.09 272.36 C 680.49 244.81 664.85 217.28 649.26 189.73 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 750.51 189.78 C 758.89 203.48 766.41 217.71 774.48 231.60 C 783.47 247.49 792.48 263.36 801.49 279.23 C 767.61 279.24 733.73 279.27 699.86 279.22 C 716.72 249.39 733.69 219.63 750.51 189.78 Z" />
                    <path fill="#fff" opacity="1.00" d=" M 643.60 193.18 C 660.11 221.71 676.11 250.55 692.35 279.24 C 659.88 279.25 627.41 279.24 594.95 279.24 C 611.12 250.53 627.51 221.94 643.60 193.18 Z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <div className="pmd-sidebar-overlay"></div>
        {childrens}
                
      </div>
    );
  }
}
