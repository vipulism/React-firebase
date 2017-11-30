import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { Router } from 'react-router-dom';
import { instaProfileHandler } from '../services';
import INSTA_APIs from '../../../utils/apis';

const cookies = new Cookies();

class IntroductionPage extends Component{
  constructor(props){
  	super(props);
  	this.skip = this.skip.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  /**
   * Event for skiping the introduction to homepage view
   * @param  {object} event current scope/target
   */
  skip(e){
    cookies.set('stranger', true, { path: '/' });
    window.location.href = e.target.href;
  }
  render(){
    return(
      <div>
        <div className="row">
            <div className="col-md-24 col-xs-24">
                <div className="bannerArea">
                    <img src={require("../../../images/Main_Background.png")} alt="" />
                    <div className="bannerContent centerBox text-center">
                        <h1 className="articleTitle">DISCERN: TO RECOGNIZE OR FIND OUT</h1>
                        <h2 className="heading">Welcome Stranger! Say goodbye to the pain of home decor shopping.</h2>
                    </div>
                </div>
            </div>
            </div>
            <div className="row rowBtmPd">
            <div className="col-md-10 col-xs-24 col-md-push-7  text-center">
                <div className="content contentTopPd zIndex99">
                    <h2 className="articleTitle">TAKE OUR STYLE QUIZ</h2>
                    <h3 className="subHeading pdBtm-40">Our aim is to customise your shopping experience all the way 100%. But this is only possible if <span className="colorRed">we get to know you a little bit.</span>
                    </h3>
                    <p><a href="/quiz" className="btn btn-primary mrgBtm-20">Take the Style Quiz</a></p>
                    <p className="mrgBtm-20 smallText">— OR —</p>
                    <p><a href="/" className="link" onClick={this.skip}>Skip and start browsing ></a></p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-24 col-xs-24 text-center">
                <h3 className="articleTitle">NO STRINGS ATTACHED</h3>
                <h3 className="heading">How it all works</h3>
            </div>
        </div>

        <div className="row rowBtmPd">
            <div className="col-md-6 col-xs-24 col-md-offset-1">
                <h3 className="subHeading">1.<br/>Signup and help us get to know you better.</h3>
                <div className="icon-content"><img src={require("../../../images/Icon-Customised.png")} alt="" /></div>
                <h4 className="h3">A truly customised shopping experience</h4>
                <p>We at Discern Living want to enhance your shopping experience by truly customising it. For this we need to understand a few things about what you like and dislike.</p>
            </div>
            <div className="col-md-6 col-xs-24 col-md-offset-2">
                <h3 className="subHeading">2.<br/>We want to eliminate customer exhaustion</h3>
                <div className="icon-content"><img src={require("../../../images/noun_982874_cc.png")} alt="" /></div>
                <h4 className="h3">And it really happens all the time</h4>
                <p>Our platform aims to solve the problem of ‘customer exhaustion’ by showcasing only those products and categories that you’ll end up absolutlely loving. </p>
            </div>
            <div className="col-md-6 col-xs-24 col-md-offset-2">
                <h3 className="subHeading">3.<br/>Remember, we’re with you all the way. Everyday.</h3>
                <div className="icon-content"><img src={require("../../../images/noun_136434_cc.png")} alt="" /></div>
                <h4 className="h3">24 x 7 and 365 days of the year</h4>
                <p>Discern Living is a market place, which means independent suppliers list their products everyday. But that doesn’t mean we sit on the sidelines. Your home, is our home and we’re here to help.</p>
            </div>
        </div>

        <div className="row rowBtmPd">
            <div className="col-md-11 col-xs-24 col-md-offset-1">
                <div className="bannerArea">
                    <img src={require("../../../images/Background_image.png")} alt="" />
                    <div className="bannerContent mediumBox posTopRight">
                        <h1 className="articleTitle">WE WORK WITH THE BEST</h1>
                        <h2 className="heading">Our Featured Brands</h2>
                        <p>Discern Living houses over 70 premium furniture brands avaialble across India so that you don’t have to go jumping browser window to window.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-8 col-xs-24 col-md-offset-3">
                <div className="content contentTopPd">
                    <img src={require("../../../images/brands.jpg")} alt="" />
                </div>
            </div>
        </div>

        <div className="row rowBtmPd nopadding ">
            <div className="col-md-10 col-xs-24 col-md-offset-1">
                <div className="content pdTop-70">
                    <h3 className="subHeading">Our in-house designer service is quite simple:</h3>
                    <ul className="list pdTop-20">
                        <li>
                            <h3 className="h3">1) Help us get to know you better</h3>
                            <div className="listContent">
                                <p>Fill up our super fun style quiz and signup with us. Hey! We need to know who we’re working with here.</p>
                            </div>
                        </li>
                        <li>
                            <h3 className="h3">2) Upload pictures of your room / space</h3>
                            <div className="listContent">
                                <p>Nothing fancy. Just simple pictures of your room / space that you’re looking to do up from your phone or any other source.</p>
                            </div>
                        </li>
                        <li>
                            <h3 className="h3">3) Sit back. Relax. Catch your favorite show on Netflix.</h3>
                            <div className="listContent">
                                <p>Yup. True story. While you relax in 24 - 48 hours our team will put together a rather impressive 3D model of your room using products that you can purchase directly from us.</p>
                                <p><a href="#" className="btn btn-secondary mrgTop-20">Let’s Do This</a></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-11 col-xs-24 col-md-offset-2">
                <div className="bannerArea">
                    <img src={require("../../../images/Background_image.png")} alt="" />
                    <div className="bannerContent mediumBox2 posTopLeft-20">
                        <h1 className="articleTitle">GETTING LOST WITHOUT CAUSE?</h1>
                        <h2 className="heading">Hire Discern Designers</h2>
                        <p>We offer a 100% free service that makes sure you get your dream home with an expert in-house team to help put your dream house together.</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="row rowBtmPd">
          <div className="col-md-12 col-xs-24 col-md-offset-1">
            <div className="feed">
              <h3 className="subHeading">
                <img src={require("../../../images/instagramHeading.jpg")} alt="" /> @discernliving
              </h3>
              <ul className="imageBlock">
                { this.props.homePage.instaProfile.list.slice(0,6).map((item, i) => (
                      <li key={i}>
                        <div className="imageBox">
                          <a target="_blank" href={`https://instagram.com/p/${item.code}`}>
                            <img src={item.thumbnail_src} alt={item.caption} />
                          </a>
                        </div>
                      </li>
                    )
                  )
                }
              </ul>
            </div>
          </div>
            <div className="col-md-8 col-xs-24 col-md-offset-1">
                <div className="content pdTop-70">
                    <h2 className="articleTitle">RAN INTO A CREATIVE BLOCK?</h2>
                    <h3 className="heading">Find inspiration with us</h3>
                    <p>We know shopping for your home can be a daunting task. With so many options and ‘best quality’ services why won’t it! At Discern Living we inspire original hand-written content, which empowers you to decorate, design and find solutions for your home, unique to your style and within your reach.</p>
                    <p><a href="#" className="btn btn-secondary mrgTop-20">Read Our Blog</a></p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        homePage: state.homePage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(instaProfileHandler())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionPage);
