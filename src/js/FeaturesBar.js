import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {TopToBottomBar} from "./topToBottomBar";
import {HomeDropDownBar} from "./homeDropDownBar";
import {ShopDropDownBar} from "./shopDropDownBar";
import {ProductDropDownBar} from "./productDropDownBar";
import {FeaturesDropDownBar} from "./featuresDropDownBar";
import {BlogDropDownBar} from "./blogDropDownBar";

class FeaturesBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginTokens: {
                accessToken: null,
                refreshToken: null
            },
            emailId: null,
            password: null
        }
        this.openAccount = this.openAccount.bind(this);
        this.closeAccount = this.closeAccount.bind(this);
        this.shopByCategory = this.shopByCategory.bind(this);
    }

    openAccount() {
        document.getElementById("myAccount").classList.add('open-side');
    }

    closeAccount() {
        console.log("remove")
        document.getElementById("myAccount").classList.remove('open-side');
        document.getElementById("searchbar-input-id").classList.remove('show');
        document.getElementById("myCartId").classList.remove('open-side');
        document.getElementById("myWishList").classList.remove('open-side');
    }

    shopByCategory() {
        document.getElementById("searchbar-input-id").classList.add('show');
    }


    openWishList() {
        document.getElementById("myWishList").classList.add('open-side');
    }

    inputSet = (e) => {
        console.log(e)
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <div id="featuresBarId">
                <div className="category-header-2">
                    <div className="custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="navbar-menu">
                                    <div className="logo-block">
                                        <div className="brand-logo logo-sm-center">
                                            <a href="html/index.html">
                                                <img src="assets/images/layout-2/logo/logo.png"
                                                     className="img-fluid  "
                                                     alt="logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="nav-block">

                                        <div className="nav-left" onClick={this.shopByCategory}>

                                            <nav className="navbar" data-bs-toggle="collapse"
                                                 data-bs-target="#navbarToggleExternalContent">
                                                <button className="navbar-toggler" type="button">
                                                <span className="navbar-icon"><i
                                                    className="fa fa-arrow-down"></i></span>
                                                </button>
                                                <h5 className="mb-0  text-white title-font">Shop by category</h5>
                                            </nav>
                                            <TopToBottomBar closeAccount={this.closeAccount}/>
                                        </div>
                                    </div>
                                    <div className="menu-block">
                                        <nav id="main-nav">
                                            <div className="toggle-nav"><i className="fa fa-bars sidebar-bar"></i>
                                            </div>
                                            <ul id="main-menu" className="sm pixelstrap sm-horizontal">
                                                <li>
                                                    <div className="mobile-back text-right">Back<i
                                                        className="fa fa-angle-right ps-2"
                                                        aria-hidden="true"></i></div>
                                                </li>
                                                {/* <!--HOME-->*/}
                                                <li>
                                                    <a className="dark-menu-item" href="javascript:void(0)">Home</a>
                                                    <ul id="home-ui-id">
                                                        <HomeDropDownBar></HomeDropDownBar>
                                                    </ul>
                                                </li>
                                                {/*<!--HOME-END-->
                                            <!--SHOP-->*/}
                                                <li>
                                                    <a className="dark-menu-item" href="javascript:void(0)">shop</a>
                                                    <ul>
                                                        <ShopDropDownBar></ShopDropDownBar>
                                                    </ul>
                                                </li>
                                                {/*<!--SHOP-END-->
                                            <!--product-meu start-->*/}
                                                <li className="mega"><a className="dark-menu-item"
                                                                        href="javascript:void(0)">product
                                                </a>
                                                    <ul className="mega-menu full-mega-menu ">
                                                        <ProductDropDownBar></ProductDropDownBar>
                                                    </ul>
                                                </li>
                                                {/*product-meu end*/}

                                                {/*mega-meu start*/}
                                                <li className="mega">
                                                    <a className="dark-menu-item"
                                                       href="javascript:void(0)">features</a>
                                                    <ul className="mega-menu full-mega-menu ratio_landscape">
                                                        <FeaturesDropDownBar></FeaturesDropDownBar>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="dark-menu-item" href="javascript:void(0)">blog</a>
                                                    <ul>
                                                        <BlogDropDownBar></BlogDropDownBar>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="icon-block">
                                        <ul>
                                            <li className="mobile-search">
                                                <a href="javascript:void(0)">

                                                </a>
                                            </li>
                                            <li className="mobile-user onhover-dropdown Login-v1"
                                                onClick={this.openAccount}>
                                                <i className="fa fa-user" aria-hidden="true"
                                                   style={{color: "#fff", fontSize: "30px"}}></i>

                                            </li>
                                            <li className="mobile-setting" onClick="openSetting()">

                                            </li>
                                            <li className="mobile-wishlist item-count" onClick={this.openWishList}>
                                                <a href="javascript:void(0)">
                                                    <svg viewBox="0 -28 512.001 512"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/>
                                                    </svg>
                                                    <div className="cart-item">
                                                        <div>0 item<span>wishlist</span>
                                                        </div>
                                                    </div>
                                                    <div className="item-count-contain">
                                                        2
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mobile-cart item-count" onClick="openCart()">
                                                <a href="javascript:void(0)">
                                                    <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path
                                                                d="m497 401.667c-415.684 0-397.149.077-397.175-.139-4.556-36.483-4.373-34.149-4.076-34.193 199.47-1.037-277.492.065 368.071.065 26.896 0 47.18-20.377 47.18-47.4v-203.25c0-19.7-16.025-35.755-35.725-35.79l-124.179-.214v-31.746c0-17.645-14.355-32-32-32h-29.972c-17.64 0-31.99 14.351-31.99 31.99v31.594l-133.21-.232-9.985-54.992c-2.667-14.694-15.443-25.36-30.378-25.36h-68.561c-8.284 0-15 6.716-15 15s6.716 15 15 15c72.595 0 69.219-.399 69.422.719 16.275 89.632 5.917 26.988 49.58 306.416l-38.389.2c-18.027.069-32.06 15.893-29.81 33.899l4.252 34.016c1.883 15.06 14.748 26.417 29.925 26.417h26.62c-18.8 36.504 7.827 80.333 49.067 80.333 41.221 0 67.876-43.813 49.067-80.333h142.866c-18.801 36.504 7.827 80.333 49.067 80.333 41.22 0 67.875-43.811 49.066-80.333h31.267c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-209.865-352.677c0-1.097.893-1.99 1.99-1.99h29.972c1.103 0 2 .897 2 2v111c0 8.284 6.716 15 15 15h22.276l-46.75 46.779c-4.149 4.151-10.866 4.151-15.015 0l-46.751-46.779h22.277c8.284 0 15-6.716 15-15v-111.01zm-30 61.594v34.416h-25.039c-20.126 0-30.252 24.394-16.014 38.644l59.308 59.342c15.874 15.883 41.576 15.885 57.452 0l59.307-59.342c14.229-14.237 4.13-38.644-16.013-38.644h-25.039v-34.254l124.127.214c3.186.005 5.776 2.603 5.776 5.79v203.25c0 10.407-6.904 17.4-17.18 17.4h-299.412l-35.477-227.039zm-56.302 346.249c0 13.877-11.29 25.167-25.167 25.167s-25.166-11.29-25.166-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167zm241 0c0 13.877-11.289 25.167-25.166 25.167s-25.167-11.29-25.167-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167z"/>
                                                        </g>
                                                    </svg>
                                                </a>
                                                <div className="item-count-contain">
                                                    3
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-right">
                                        <div className="contact-block">
                                            <div>
                                                <i className="fa fa-volume-control-phone"></i>
                                                <span>call us<span>123-456-76890</span></span>
                                            </div>
                                        </div>
                                        <div className="btn-group">
                                            <div className="gift-block" data-bs-toggle="dropdown">
                                                <div className="grif-icon">
                                                    <i className="icon-gift"></i>
                                                </div>
                                                <div className="gift-offer">
                                                    <p>gift box</p>
                                                    <span>Festivel Offer</span>
                                                </div>
                                            </div>
                                            <div className="dropdown-menu gift-dropdown">
                                                <div className="media">
                                                    <div className="me-3">
                                                        <img src="assets/images/icon/1.png"
                                                             alt="Generic placeholder image"/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Billion Days</h5>
                                                        <p><img src="assets/images/icon/currency.png"
                                                                className="cash"
                                                                alt="curancy"/>
                                                            Flat Rs. 270 Rewards</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="me-3">
                                                        <img src="assets/images/icon/2.png"
                                                             alt="Generic placeholder image"
                                                             className="gift-bloc"/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Fashion Discount</h5>
                                                        <p><img src="assets/images/icon/fire.png" className="fire"
                                                                alt="fire"/>Extra 10%
                                                            off (upto Rs. 10,000*) </p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="me-3">
                                                        <img src="assets/images/icon/3.png"
                                                             alt="Generic placeholder image"/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">75% off Store</h5>
                                                        <p>No coupon code is required.</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="me-3">
                                                        <img src="assets/images/icon/6.png"
                                                             alt="Generic placeholder image"/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Upto 50% off</h5>
                                                        <p>Buy popular phones under Rs.20.</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="me-3">
                                                        <img src="assets/images/icon/5.png"
                                                             alt="Generic placeholder image"/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Beauty store</h5>
                                                        <p><img src="assets/images/icon/currency.png"
                                                                className="cash"
                                                                alt="curancy"/>
                                                            Flat Rs. 270 Rewards</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="searchbar-input">
                        <div className="input-group">
                        <span className="input-group-text">
                        </span>
                            <input type="text" className="form-control" placeholder="search your product"/>
                            <span className="input-group-text close-searchbar">
                        <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path
                            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export {FeaturesBar}
