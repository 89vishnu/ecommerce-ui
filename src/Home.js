import React, {Component} from "react";
import SideBar from "./js/sidebar";
import {TopToBottomBar} from "./js/topToBottomBar";
import {HomeDropDownBar} from "./js/homeDropDownBar";
import {ShopDropDownBar} from "./js/shopDropDownBar";
import {ProductDropDownBar} from "./js/productDropDownBar";
import {FeaturesDropDownBar} from "./js/featuresDropDownBar";
import {BlogDropDownBar} from "./js/blogDropDownBar";

class Home extends Component {

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

    closeAccount() {
        console.log("remove")
        document.getElementById("myAccount").classList.remove('open-side');
        document.getElementById("searchbar-input-id").classList.remove('show');
        document.getElementById("myCartId").classList.remove('open-side');
        document.getElementById("wishlist_side").classList.remove('open-side');
    }

    openAccount() {
        document.getElementById("myAccount").classList.add('open-side');
    }

    shopByCategory() {
        document.getElementById("searchbar-input-id").classList.add('show');
    }

    openShopingCart() {
        document.getElementById("myCartId").classList.add('open-side');
    }

    closeCart() {
        document.getElementById("myCartId").classList.remove('open-side');
    }

    backToHome() {
        document.getElementById("middleContent").classList.remove('display-none-div');
        document.getElementById("cartPageId").classList.add('display-none-div');
        document.getElementById("checkOutId").classList.add('display-none-div');
        document.getElementById("wishListDetailId").classList.add('display-none-div');
    }

    viewCart() {
        console.log("view-cart");
        document.getElementById("myCartId").classList.remove('open-side');
        document.getElementById("cartPageId").classList.remove('display-none-div');
        document.getElementById("middleContent").classList.add('display-none-div');
        document.getElementById("checkOutId").classList.add('display-none-div');
    }

    checkout() {
        console.log("check-out");
        document.getElementById("middleContent").classList.add('display-none-div');
        document.getElementById("cartPageId").classList.add('display-none-div');
        document.getElementById("myCartId").classList.remove('open-side');
        document.getElementById("checkOutId").classList.remove('display-none-div');
    }

    openWishList() {
        document.getElementById("wishlist_side").classList.add('open-side');
    }

    loadDetailWishList() {
        document.getElementById("middleContent").classList.add('display-none-div');
        document.getElementById("wishListDetailId").classList.remove('display-none-div');
    }

    inputSet = (e) => {
        console.log(e)
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <SideBar closeAccount={this.closeAccount}></SideBar>
                <div className="layout-header2">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="main-menu-block">
                                <div className="header-left">
                                    <div className="sm-nav-block">
                                        <span className="sm-nav-btn">
                                            <i className="fa fa-bars"></i>
                                        </span>
                                        <ul className="nav-slide">
                                            <li>
                                                <div className="nav-sm-back">
                                                    back <i className="fa fa-angle-right ps-2"></i>
                                                </div>
                                            </li>
                                            <li><a href="html/category-page(left-sidebar).html">western ware</a></li>
                                            <li><a href="html/category-page(left-sidebar).html">TV, Appliances</a></li>
                                            <li><a href="html/category-page(left-sidebar).html">Pets Products</a></li>
                                            <li><a href="html/category-page(left-sidebar).html">Car, Motorbike</a></li>
                                            <li><a href="html/category-page(left-sidebar).html">Industrial Products</a>
                                            </li>
                                            <li><a href="html/category-page(left-sidebar).html">Beauty, Health
                                                Products</a></li>
                                            <li><a href="html/category-page(left-sidebar).html">Grocery Products </a>
                                            </li>
                                            <li><a href="html/category-page(left-sidebar).html">Sports</a></li>
                                            <li><a href="html/category-page(left-sidebar).html">Bags, Luggage</a></li>
                                            <li><a href="html/category-page(left-sidebar).html">Movies, Music </a></li>
                                            <li><a href="html/category-page(left-sidebar).html">Video Games</a></li>
                                            <li><a href="html/category-page(left-sidebar).html">Toys, Baby Products</a>
                                            </li>
                                            <li className="mor-slide-open">
                                                <ul>
                                                    <li><a href="html/category-page(left-sidebar).html">Bags,
                                                        Luggage</a></li>
                                                    <li><a href="html/category-page(left-sidebar).html">Movies,
                                                        Music </a></li>
                                                    <li><a href="html/category-page(left-sidebar).html">Video Games</a>
                                                    </li>
                                                    <li><a href="html/category-page(left-sidebar).html">Toys, Baby
                                                        Products</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="mor-slide-click">
                                                    mor category
                                                    <i className="fa fa-angle-down pro-down"></i>
                                                    <i className="fa fa-angle-up pro-up"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="brand-logo logo-sm-center">
                                        <a href="html/index.html">
                                            <img src="assets/images/layout-2/logo/logo.png" className="img-fluid  "
                                                 alt="logo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="input-block">
                                    <div className="input-box">
                                        <form className="big-deal-form ">
                                            <div className="input-group ">
                                                <div className="input-group-text">
                                                    <span className="search"><i className="fa fa-search"></i></span>
                                                </div>
                                                <input type="search" className="form-control"
                                                       placeholder="Search a Product"/>
                                                <div className="input-group-text">
                                                    <select>
                                                        <option>All Category</option>
                                                        <option>indurstrial</option>
                                                        <option>sports</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="header-right">
                                    <div className="icon-block">
                                        <ul>
                                            <li className="mobile-search">
                                                <a href="javascript:void(0)">
                                                </a>
                                            </li>
                                            <li className="mobile-user " onClick={this.openAccount}>
                                                <a href="javascript:void(0)">
                                                    {/*          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                                    {/*               xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"*/}
                                                    {/*               viewBox="0 0 512 512"*/}
                                                    {/*               style="enable-background:new 0 0 512 512;"*/}
                                                    {/*               xml:space="preserve">*/}
                                                    {/*  <g>*/}
                                                    {/*    <g>*/}
                                                    {/*      <path d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240*/}
                                                    {/*        c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"/>*/}
                                                    {/*    </g>*/}
                                                    {/*  </g>*/}
                                                    {/*              <g>*/}
                                                    {/*    <g>*/}
                                                    {/*      <path d="M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301z*/}
                                                    {/*         M451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z"/>*/}
                                                    {/*    </g>*/}
                                                    {/*  </g>*/}
                                                    {/*</svg>*/}
                                                </a>
                                            </li>
                                            <li className="mobile-setting" onClick="openSetting()">
                                                <a href="javascript:void(0)">
                                                    <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"/>
                                                        <path
                                                            d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="mobile-wishlist item-count" onClick="openWishlist()">
                                                <a href="javascript:void(0)">
                                                    <svg viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/>
                                                    </svg>
                                                    <div className="item-count-contain">
                                                        2
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mobile-cart item-count" onClick={this.openShopingCart}>
                                                <a href="javascript:void(0)">
                                                    <div className="cart-block">
                                                        <div className="cart-icon">
                                                            <svg enable-background="new 0 0 512 512"
                                                                 viewBox="0 0 512 512"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <g>
                                                                    <path
                                                                        d="m497 401.667c-415.684 0-397.149.077-397.175-.139-4.556-36.483-4.373-34.149-4.076-34.193 199.47-1.037-277.492.065 368.071.065 26.896 0 47.18-20.377 47.18-47.4v-203.25c0-19.7-16.025-35.755-35.725-35.79l-124.179-.214v-31.746c0-17.645-14.355-32-32-32h-29.972c-17.64 0-31.99 14.351-31.99 31.99v31.594l-133.21-.232-9.985-54.992c-2.667-14.694-15.443-25.36-30.378-25.36h-68.561c-8.284 0-15 6.716-15 15s6.716 15 15 15c72.595 0 69.219-.399 69.422.719 16.275 89.632 5.917 26.988 49.58 306.416l-38.389.2c-18.027.069-32.06 15.893-29.81 33.899l4.252 34.016c1.883 15.06 14.748 26.417 29.925 26.417h26.62c-18.8 36.504 7.827 80.333 49.067 80.333 41.221 0 67.876-43.813 49.067-80.333h142.866c-18.801 36.504 7.827 80.333 49.067 80.333 41.22 0 67.875-43.811 49.066-80.333h31.267c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-209.865-352.677c0-1.097.893-1.99 1.99-1.99h29.972c1.103 0 2 .897 2 2v111c0 8.284 6.716 15 15 15h22.276l-46.75 46.779c-4.149 4.151-10.866 4.151-15.015 0l-46.751-46.779h22.277c8.284 0 15-6.716 15-15v-111.01zm-30 61.594v34.416h-25.039c-20.126 0-30.252 24.394-16.014 38.644l59.308 59.342c15.874 15.883 41.576 15.885 57.452 0l59.307-59.342c14.229-14.237 4.13-38.644-16.013-38.644h-25.039v-34.254l124.127.214c3.186.005 5.776 2.603 5.776 5.79v203.25c0 10.407-6.904 17.4-17.18 17.4h-299.412l-35.477-227.039zm-56.302 346.249c0 13.877-11.29 25.167-25.167 25.167s-25.166-11.29-25.166-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167zm241 0c0 13.877-11.289 25.167-25.166 25.167s-25.167-11.29-25.167-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167z"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="cart-item">
                                                            <h5>shopping</h5>
                                                            <h5>cart2</h5>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="item-count-contain">
                                                    3
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menu-nav">
                                        <span className="toggle-nav">
                                            <i className="fa fa-bars "></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="searchbar-input-id" className="searchbar-input">
                        <div className="input-group">
                            <span className="input-group-text">
            {/*<!--          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28.931px" height="28.932px" viewBox="0 0 28.931 28.932" style="enable-background:new 0 0 28.931 28.932;" xml:space="preserve"><g><path d="M28.344,25.518l-6.114-6.115c1.486-2.067,2.303-4.537,2.303-7.137c0-3.275-1.275-6.355-3.594-8.672C18.625,1.278,15.543,0,12.266,0C8.99,0,5.909,1.275,3.593,3.594C1.277,5.909,0.001,8.99,0.001,12.266c0,3.276,1.275,6.356,3.592,8.674c2.316,2.316,5.396,3.594,8.673,3.594c2.599,0,5.067-0.813,7.136-2.303l6.114,6.115c0.392,0.391,0.902,0.586,1.414,0.586c0.513,0,1.024-0.195,1.414-0.586C29.125,27.564,29.125,26.299,28.344,25.518z M6.422,18.111c-1.562-1.562-2.421-3.639-2.421-5.846S4.86,7.983,6.422,6.421c1.561-1.562,3.636-2.422,5.844-2.422s4.284,0.86,5.845,2.422c1.562,1.562,2.422,3.638,2.422,5.845s-0.859,4.283-2.422,5.846c-1.562,1.562-3.636,2.42-5.845,2.42S7.981,19.672,6.422,18.111z"/></g></svg>-->*/}
                            </span>
                            <input type="text" className="form-control" placeholder="search your product"/>
                            <span className="input-group-text close-searchbar">
                            <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path
                                d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="category-header-2">
                    <div className="custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="navbar-menu">
                                    <div className="logo-block">
                                        <div className="brand-logo logo-sm-center">
                                            <a href="html/index.html">
                                                <img src="assets/images/layout-2/logo/logo.png" className="img-fluid  "
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
                                            <div className="toggle-nav"><i className="fa fa-bars sidebar-bar"></i></div>
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
                                                    <a className="dark-menu-item" href="javascript:void(0)">features</a>
                                                    <ul className="mega-menu full-mega-menu ratio_landscape">
                                                        <FeaturesDropDownBar></FeaturesDropDownBar>
                                                    </ul>
                                                </li>
                                                {/*mega-meu end*/}


                                                {/*pages meu start*/}

                                                {/*product-end end*/}

                                                {/*blog-meu start*/}
                                                <li>
                                                    <a className="dark-menu-item" href="javascript:void(0)">blog</a>
                                                    <ul>
                                                        <BlogDropDownBar></BlogDropDownBar>
                                                    </ul>
                                                </li>
                                                {/*blog-meu end*/}
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
                                                <i class="fa fa-user" aria-hidden="true"
                                                   style={{color: "#fff", fontSize: "30px"}}></i>

                                            </li>
                                            <li className="mobile-setting" onClick="openSetting()">
                                                <a href="javascript:void(0)">
                                                    {/*<svg enable-background="new 0 0 512 512" viewBox="0 0 512 512"*/}
                                                    {/*     xmlns="http://www.w3.org/2000/svg">*/}
                                                    {/*    <path*/}
                                                    {/*        d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"/>*/}
                                                    {/*    <path*/}
                                                    {/*        d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"/>*/}
                                                    {/*</svg>*/}
                                                </a>
                                            </li>
                                            <li className="mobile-wishlist item-count" onClick={this.openWishList}>
                                                <a href="javascript:void(0)">
                                                    <svg viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg">
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
                                                        <p><img src="assets/images/icon/currency.png" className="cash"
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
                                                        <p><img src="assets/images/icon/currency.png" className="cash"
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
            {/*       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28.931px" height="28.932px" viewBox="0 0 28.931 28.932" style="enable-background:new 0 0 28.931 28.932;" xml:space="preserve"><g><path d="M28.344,25.518l-6.114-6.115c1.486-2.067,2.303-4.537,2.303-7.137c0-3.275-1.275-6.355-3.594-8.672C18.625,1.278,15.543,0,12.266,0C8.99,0,5.909,1.275,3.593,3.594C1.277,5.909,0.001,8.99,0.001,12.266c0,3.276,1.275,6.356,3.592,8.674c2.316,2.316,5.396,3.594,8.673,3.594c2.599,0,5.067-0.813,7.136-2.303l6.114,6.115c0.392,0.391,0.902,0.586,1.414,0.586c0.513,0,1.024-0.195,1.414-0.586C29.125,27.564,29.125,26.299,28.344,25.518z M6.422,18.111c-1.562-1.562-2.421-3.639-2.421-5.846S4.86,7.983,6.422,6.421c1.561-1.562,3.636-2.422,5.844-2.422s4.284,0.86,5.845,2.422c1.562,1.562,2.422,3.638,2.422,5.845s-0.859,4.283-2.422,5.846c-1.562,1.562-3.636,2.42-5.845,2.42S7.981,19.672,6.422,18.111z"/></g></svg>*/}
                        </span>
                            <input type="text" className="form-control" placeholder="search your product"/>
                            <span className="input-group-text close-searchbar">
                        <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path
                            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                        </span>
                        </div>
                    </div>
                </div>
                <div id="middleContent" className="adding-padding-top-space">

                    <section className="theme-slider home-slide b-g-white making-bottom-space" id="home-slide">
                        <div className="custom-container">
                            <div className="row">
                                <div className="col">
                                    <div className="slide-1 no-arrow">
                                        <div>
                                            <div className="slider-banner p-center slide-banner-1">
                                                <div className="slider-img">
                                                    <ul className="layout1-slide-1">
                                                        <li id="img-1"><img src="assets/images/layout-2/slider/1.1.png"
                                                                            className="img-fluid" alt="slider"/></li>
                                                        <li id="img-2" className="slide-center"><img
                                                            src="assets/images/layout-2/slider/1.2.png"
                                                            className="img-fluid" alt="slider"/></li>
                                                    </ul>
                                                </div>
                                                <div className="slider-banner-contain">
                                                    <div>
                                                        <h1>mi<span>Mobile</span></h1>
                                                        <h4>fast and light</h4>
                                                        <h2>Pixel Perfect Deal Camera</h2>
                                                        <a href="html/product-page(left-sidebar).html"
                                                           className="btn btn-normal">
                                                            Shop Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="brand-panel">
                        <div class="brand-panel-box">
                            <div class="brand-panel-contain ">
                                <ul>
                                    <li><a href="javascript:void(0)">top brand</a></li>
                                    <li><a>:</a></li>
                                    <li><a href="html/category-page(left-sidebar).html">aerie</a></li>
                                    <li><a href="html/category-page(left-sidebar).html">baci lingrie</a></li>
                                    <li><a href="html/category-page(left-sidebar).html">gerbe</a></li>
                                    <li><a href="html/category-page(left-sidebar).html">jolidon</a></li>
                                    <li><a href="html/category-page(left-sidebar).html">Wonderbra</a></li>
                                    <li><a href="html/category-page(left-sidebar).html">Ultimo</a></li>
                                    <li><a href="html/category-page(left-sidebar).html">Vassarette </a></li>
                                    <li><a href="html/category-page(left-sidebar).html">Oysho</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="collection-banner section-pt-space b-g-white ">
                        <div className="custom-container">
                            <div className="row collection2">
                                <div className="col-md-4">
                                    <div className="collection-banner-main banner-1  p-right">
                                        <div className="collection-img">
                                            <img src="assets/images/layout-2/collection-banner/1.jpg"
                                                 className="img-fluid bg-img  "
                                                 alt="banner"/>
                                        </div>
                                        <div className="collection-banner-contain">
                                            <div>
                                                <h3>women</h3>
                                                <h4>fashion</h4>
                                                <div className="shop">
                                                    <a href="html/product-page(left-sidebar).html">
                                                        shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="collection-banner-main banner-1 p-right">
                                        <div className="collection-img">
                                            <img src="assets/images/layout-2/collection-banner/2.jpg"
                                                 className="img-fluid bg-img  "
                                                 alt="banner"/>
                                        </div>
                                        <div className="collection-banner-contain ">
                                            <div>
                                                <h3>camera</h3>
                                                <h4>lenses</h4>
                                                <div className="shop">
                                                    <a href="html/product-page(left-sidebar).html">
                                                        shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="collection-banner-main banner-1 p-right">
                                        <div className="collection-img">
                                            <img src="assets/images/layout-2/collection-banner/3.jpg"
                                                 className="img-fluid bg-img  "
                                                 alt="banner"/>
                                        </div>
                                        <div className="collection-banner-contain ">
                                            <div>
                                                <h3>refrigerator</h3>
                                                <h4>lG mini</h4>
                                                <div className="shop">
                                                    <a href="html/product-page(left-sidebar).html">
                                                        shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="discount-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="discount-banner-contain">
                                        <h2>Discount on every single item on our site.</h2>
                                        <h1><span>OMG! Just Look at the</span> <span>great Deals!</span></h1>
                                        <div className="rounded-contain rounded-inverse">
                                            <div className="rounded-subcontain">
                                                How does it feel, when you see great discount deals for each product?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*<section className="section-pt-space">*/}
                    {/*    <div className="tab-product-main">*/}
                    {/*        <div className="tab-prodcut-contain">*/}
                    {/*            <ul className="tabs tab-title">*/}
                    {/*                <li className="current"><a*/}
                    {/*                    href="https://themes.pixelstrap.com/bigdeal/html/tab-1">fashion</a></li>*/}
                    {/*                <li className=""><a*/}
                    {/*                    href="https://themes.pixelstrap.com/bigdeal/html/tab-2">electronic</a></li>*/}
                    {/*                <li className=""><a href="https://themes.pixelstrap.com/bigdeal/html/tab-3">footware</a>*/}
                    {/*                </li>*/}
                    {/*                <li className=""><a href="https://themes.pixelstrap.com/bigdeal/html/tab-4">sports</a>*/}
                    {/*                </li>*/}
                    {/*                <li className=""><a href="https://themes.pixelstrap.com/bigdeal/html/tab-5">toys</a>*/}
                    {/*                </li>*/}
                    {/*                <li className=""><a href="https://themes.pixelstrap.com/bigdeal/html/tab-6">books</a>*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}

                    {/* slider tab*/}
                    <section className="section-py-space ratio_square product">
                        <div className="custom-container">
                            <div className="row">
                                <div className="col pr-0">
                                    <div className="theme-tab product mb--5">
                                        <div className="tab-content-cls ">
                                            <div id="tab-1" className="tab-content active default">
                                                <div className="product-slide-6 product-m no-arrow">
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img
                                                                            src="../public/assets/images/layout-2/product/1.jpg"
                                                                            className="img-fluid  "
                                                                            alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline ">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                sony xperia m5
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 56.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 24.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                woman hande bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 56.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 24.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                nikon camera
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 60.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 20.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                lenovo laptop
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 70.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 30.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                earphone Pouch Bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 100.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 80.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                wooden table
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 90.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 28.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                Wireless Optical Mouse
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 80.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 28.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab-2" className="tab-content ">
                                                <div className="product-slide-6 product-m no-arrow">
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                Wireless Optical Mouse
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $150.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 80.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline ">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                sony xperia m5
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 120.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $100.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                woman hande bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 60.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 30.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                nikon camera
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 40.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 30.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                lenovo laptop
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 45.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 18.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                earphone Pouch Bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 180.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 120.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                wooden table
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 320.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 125.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div id="tab-3" className="tab-content ">
                                                <div className="product-slide-6 product-m no-arrow">
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="https://themes.pixelstrap.com/bigdeal/html/product-pagplayout4e(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                wooden table
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 225.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 180.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                Wireless Optical Mouse
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $99.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 75.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline ">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                sony xperia m5
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 260.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 120.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                woman hande bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 360.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 140.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                nikon camera
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 370.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 170.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                lenovo laptop
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 76.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 40.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                earphone Pouch Bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 60.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 45.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab-4" className="tab-content ">
                                                <div className="product-slide-6 product-m no-arrow">
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                earphone Pouch Bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 60.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 45.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                wooden table
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 225.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 180.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                Wireless Optical Mouse
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $99.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 75.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline ">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                sony xperia m5
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 260.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 120.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                woman hande bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 360.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 140.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                nikon camera
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 370.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 170.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                lenovo laptop
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 76.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 40.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div id="tab-5" className="tab-content ">
                                                <div className="product-slide-6 product-m no-arrow">
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                lenovo laptop
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 76.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 40.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                earphone Pouch Bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 60.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 45.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                wooden table
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 225.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 180.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                Wireless Optical Mouse
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $99.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 75.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline ">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                sony xperia m5
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 260.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 120.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                woman hande bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 360.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 140.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                nikon camera
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 370.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 170.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            <div id="tab-6" className="tab-content ">
                                                <div className="product-slide-6 product-m no-arrow">
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a4.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                nikon camera
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 370.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 170.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a5.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                                <div className="on-sale1">
                                                                    on sale
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                lenovo laptop
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 76.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 40.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a6.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                earphone Pouch Bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 60.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 45.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a7.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                wooden table
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 225.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 180.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a8.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                Wireless Optical Mouse
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $99.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 75.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a1.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline ">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                sony xperia m5
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 260.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 120.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-back">
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <img src="assets/images/layout-2/product/a3.jpg"
                                                                             className="img-fluid  "
                                                                             alt="product"/>
                                                                    </a>
                                                                </div>
                                                                <div className="product-icon icon-inline">
                                                                    <button onClick="openCart()" className="tooltip-top"
                                                                            data-tippy-content="Add to cart">
                                                                        <i data-feather="shopping-cart"></i>
                                                                    </button>
                                                                    <a href="javascript:void(0)"
                                                                       className="add-to-wish tooltip-top"
                                                                       data-tippy-content="Add to Wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                       data-bs-target="#quick-view"
                                                                       className="tooltip-top"
                                                                       data-tippy-content="Quick View">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                    <a href="html/compare.html" className="tooltip-top"
                                                                       data-tippy-content="Compare">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="new-label1">
                                                                    <div>new</div>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail detail-inline">
                                                                <div className="detail-title">
                                                                    <div className="detail-left">
                                                                        <div className="rating-star">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <h6 className="price-title">
                                                                                woman hande bag
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="detail-right">
                                                                        <div className="check-price">
                                                                            $ 360.21
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="price">
                                                                                $ 140.05
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* slider tab end*/}
                    <section className="deal-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-8">
                                    <div className="deal-banner-containe">
                                        <h2>
                                            save up to 30% to 40% off
                                        </h2>
                                        <h1>
                                            omg! just look at the great deals!
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 ">
                                    <div className="deal-banner-containe">
                                        <div className="deal-btn">
                                            <a href="html/category-page(left-sidebar).html" className="btn-white">
                                                View more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<section className="rounded-category">*/}
                    {/*    <div className="container">*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col">*/}
                    {/*                <div className="slide-6 no-arrow">*/}
                    {/*                    <div>*/}
                    {/*                        <div className="category-contain">*/}
                    {/*                            <div className="img-wrapper">*/}
                    {/*                                <a href="html/category-page(left-sidebar).html">*/}
                    {/*                                    <img src="assets/images/layout-1/rounded-cat/1.png" alt="category  "*/}
                    {/*                                         className="img-fluid"/>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                    {/*                            <a href="html/category-page(left-sidebar).html" className="btn-rounded">*/}
                    {/*                                flower*/}
                    {/*                            </a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <div className="category-contain">*/}
                    {/*                            <div className="img-wrapper">*/}
                    {/*                                <a href="html/category-page(left-sidebar).html">*/}
                    {/*                                    <img src="assets/images/layout-1/rounded-cat/2.png" alt="category  "*/}
                    {/*                                         className="img-fluid"/>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                    {/*                            <a href="html/category-page(left-sidebar).html" className="btn-rounded">*/}
                    {/*                                furniture*/}
                    {/*                            </a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <div className="category-contain">*/}
                    {/*                            <div className="img-wrapper">*/}
                    {/*                                <a href="html/category-page(left-sidebar).html">*/}
                    {/*                                    <img src="assets/images/layout-1/rounded-cat/3.png" alt="category  "*/}
                    {/*                                         className="img-fluid"/>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                    {/*                            <a href="html/category-page(left-sidebar).html" className="btn-rounded">*/}
                    {/*                                bag*/}
                    {/*                            </a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <div className="category-contain">*/}
                    {/*                            <div className="img-wrapper">*/}
                    {/*                                <a href="html/category-page(left-sidebar).html">*/}
                    {/*                                    <img src="assets/images/layout-1/rounded-cat/4.png" alt="category  "*/}
                    {/*                                         className="img-fluid"/>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                    {/*                            <a href="html/category-page(left-sidebar).html" className="btn-rounded">*/}
                    {/*                                tools*/}
                    {/*                            </a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <div className="category-contain">*/}
                    {/*                            <div className="img-wrapper">*/}
                    {/*                                <a href="html/category-page(left-sidebar).html">*/}
                    {/*                                    <img src="assets/images/layout-1/rounded-cat/5.png" alt="category  "*/}
                    {/*                                         className="img-fluid"/>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                    {/*                            <a href="html/category-page(left-sidebar).html" className="btn-rounded">*/}
                    {/*                                grocery*/}
                    {/*                            </a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <div className="category-contain">*/}
                    {/*                            <div className="img-wrapper">*/}
                    {/*                                <a href="html/category-page(left-sidebar).html">*/}
                    {/*                                    <img src="assets/images/layout-1/rounded-cat/6.png" alt="category  "*/}
                    {/*                                         className="img-fluid"/>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                    {/*                            <a href="html/category-page(left-sidebar).html" className="btn-rounded">*/}
                    {/*                                camera*/}
                    {/*                            </a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <div className="category-contain">*/}
                    {/*                            <div className="img-wrapper">*/}
                    {/*                                <a href="html/category-page(left-sidebar).html">*/}
                    {/*                                    <img src="assets/images/layout-1/rounded-cat/7.png" alt="category  "*/}
                    {/*                                         className="img-fluid"/>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                    {/*                            <a href="html/category-page(left-sidebar).html" className="btn-rounded">*/}
                    {/*                                shoes*/}
                    {/*                            </a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                    <section className="collection-banner section-py-space">
                        <div className="container-fluid">
                            <div className="row collection2">
                                <div className="col-md-4">
                                    <div className="collection-banner-main banner-1 p-left">
                                        <div className="collection-img">
                                            <img src="assets/images/layout-2/collection-banner/4.jpg"
                                                 className="img-fluid bg-img "
                                                 alt="banner"/>
                                        </div>
                                        <div className="collection-banner-contain ">
                                            <div>
                                                <h3>Leather</h3>
                                                <h4>new bag</h4>
                                                <div className="shop">
                                                    <a href="html/product-page(left-sidebar).html">
                                                        shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="collection-banner-main banner-1 p-left">
                                        <div className="collection-img">
                                            <img src="assets/images/layout-2/collection-banner/5.jpg"
                                                 className="img-fluid bg-img "
                                                 alt="banner"/>
                                        </div>
                                        <div className="collection-banner-contain ">
                                            <div>
                                                <h3>nike</h3>
                                                <h4>breeze</h4>
                                                <div className="shop">
                                                    <a href="html/product-page(left-sidebar).html">
                                                        shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="collection-banner-main banner-1 p-left">
                                        <div className="collection-img">
                                            <img src="assets/images/layout-2/collection-banner/6.jpg"
                                                 className="img-fluid bg-img "
                                                 alt="banner"/>
                                        </div>
                                        <div className="collection-banner-contain ">
                                            <div>
                                                <h3>Printing 3D</h3>
                                                <h4>USB moon</h4>
                                                <div className="shop">
                                                    <a href="html/product-page(left-sidebar).html">
                                                        shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="hot-deal hotdeal-first b-g-white section-big-pb-space space-abjust">
                        <div className="custom-container">
                            <div className="row hot-2 ">
                                <div className="col-12">

                                    <div className="title3 b-g-white text-left">
                                        <h4>today's hot deal</h4>
                                    </div>

                                </div>
                                <div className="col-lg-9">
                                    <div className="slide-1 no-arrow">
                                        <div>
                                            <div className="hot-deal-contain ">
                                                <div className="row hot-deal-subcontain hotdeal-block1">
                                                    <div className="col-lg-4 col-md-4  ">
                                                        <div className="hotdeal-right-slick border-0">
                                                            <a href="html/product-page(left-sidebar).html">
                                                                <div className="img-wrraper">
                                                                    <div>
                                                                        <img src="assets/images/layout-2/hot-deal/8.jpg"
                                                                             alt="hot-deal"
                                                                             className="img-fluid  bg-img"/>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a href="html/product-page(left-sidebar).html">
                                                                <div className="img-wrraper">
                                                                    <div>
                                                                        <img src="assets/images/layout-2/hot-deal/7.jpg"
                                                                             alt="hot-deal"
                                                                             className="img-fluid  bg-img"/>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a href="html/product-page(left-sidebar).html">
                                                                <div className="img-wrraper">
                                                                    <div>
                                                                        <img src="assets/images/layout-2/hot-deal/6.jpg"
                                                                             alt="hot-deal"
                                                                             className="img-fluid  bg-img"/>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a href="html/product-page(left-sidebar).html">
                                                                <div className="img-wrraper">
                                                                    <div>
                                                                        <img src="assets/images/layout-2/hot-deal/5.jpg"
                                                                             alt="hot-deal"
                                                                             className="img-fluid  bg-img"/>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 deal-order-3">
                                                        <div className="hotdeal-right-slick border-0">
                                                            <div>
                                                                <div>
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <h5>oppo find x2 </h5>
                                                                    </a>
                                                                    <ul className="rating">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-o"></i></li>
                                                                    </ul>
                                                                    <p>
                                                                        It is a long established fact that a reader. It
                                                                        is a
                                                                        long
                                                                        established fact that a reader.It is a long
                                                                        established fact that a
                                                                        reader. It is a long established fact that a
                                                                        reader.
                                                                    </p>
                                                                    <h6>$50.30 <span>60.00</span></h6>
                                                                    <div className="timer">
                                                                        <p id="demo">
                                                                        </p>
                                                                    </div>
                                                                    <a href="html/product-page(left-sidebar).html"
                                                                       className="btn btn-normal btn-md ">shop now</a>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <h5>wooden owl </h5>
                                                                    </a>
                                                                    <ul className="rating">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-o"></i></li>
                                                                    </ul>
                                                                    <p>
                                                                        It is a long established fact that a reader. It
                                                                        is a
                                                                        long
                                                                        established fact that a reader.It is a long
                                                                        established fact that a
                                                                        reader. It is a long established fact that a
                                                                        reader.
                                                                    </p>
                                                                    <h6>$60.30 <span>70.00</span></h6>
                                                                    <div className="timer">
                                                                        <p id="demo1">
                                                                        </p>
                                                                    </div>
                                                                    <a href="html/product-page(left-sidebar).html"
                                                                       className="btn btn-normal btn-md ">shop now</a>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <h5>office cotton seat </h5>
                                                                    </a>
                                                                    <ul className="rating">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-o"></i></li>
                                                                    </ul>
                                                                    <p>
                                                                        It is a long established fact that a reader. It
                                                                        is a
                                                                        long
                                                                        established fact that a reader.It is a long
                                                                        established fact that a
                                                                        reader. It is a long established fact that a
                                                                        reader.
                                                                    </p>
                                                                    <h6>$45.30 <span>50.00</span></h6>
                                                                    <div className="timer">
                                                                        <p id="demo2">
                                                                        </p>
                                                                    </div>
                                                                    <a href="html/product-page(left-sidebar).html"
                                                                       className="btn btn-normal btn-md ">shop now</a>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <a href="html/product-page(left-sidebar).html">
                                                                        <h5>Generic Rock Earphone </h5>
                                                                    </a>
                                                                    <ul className="rating">
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star"></i></li>
                                                                        <li><i className="fa fa-star-o"></i></li>
                                                                    </ul>
                                                                    <p>
                                                                        It is a long established fact that a reader. It
                                                                        is a
                                                                        long
                                                                        established fact that a reader.It is a long
                                                                        established fact that a
                                                                        reader. It is a long established fact that a
                                                                        reader.
                                                                    </p>
                                                                    <h6>$85.30 <span>90.00</span></h6>
                                                                    <div className="timer">
                                                                        <p id="demo3">
                                                                        </p>
                                                                    </div>
                                                                    <a href="html/product-page(left-sidebar).html"
                                                                       className="btn btn-normal btn-md ">shop now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 ">
                                                        <div className="hotdeal-right-nav">
                                                            <div><img src="assets/images/layout-2/hot-deal/8.jpg"
                                                                      alt="hot-dea"
                                                                      className="img-fluid  "/></div>
                                                            <div><img src="assets/images/layout-2/hot-deal/7.jpg"
                                                                      alt="hot-dea"
                                                                      className="img-fluid  "/></div>
                                                            <div><img src="assets/images/layout-2/hot-deal/6.jpg"
                                                                      alt="hot-dea"
                                                                      className="img-fluid  "/></div>
                                                            <div><img src="assets/images/layout-2/hot-deal/5.jpg"
                                                                      alt="hot-dea"
                                                                      className="img-fluid  "/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="slide-1-section no-arrow">
                                        <div>
                                            <div className="media-banner border-0">
                                                <div className="media-banner-box">
                                                    <div className="media-heading">
                                                        <h5>New Products</h5>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media">
                                                        <a href="html/product-page(left-sidebar).html">
                                                            <img src="assets/images/layout-2/media-banner/1.jpg"
                                                                 className="img-fluid "
                                                                 alt="banner"/>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-contant">
                                                                <div>
                                                                    <div className="product-detail">
                                                                        <ul className="rating">
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <p>Bajaj GX-1
                                                                                Mixer</p></a>
                                                                        <h6>$42.05 <span>$47.21</span></h6>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <button onClick="openCart()"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Add to cart"><i
                                                                            data-feather="shopping-cart"></i></button>
                                                                        <a href="javascript:void(0)"
                                                                           className="add-to-wish tooltip-top"
                                                                           data-tippy-content="Add to Wishlist"><i
                                                                            data-feather="heart"></i></a>
                                                                        <a href="javascript:void(0)"
                                                                           data-bs-toggle="modal"
                                                                           data-bs-target="#quick-view"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Quick View"><i
                                                                            data-feather="eye"></i></a>
                                                                        <a href="html/compare.html"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Compare"><i
                                                                            data-feather="refresh-cw"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media">
                                                        <a href="html/product-page(left-sidebar).html">
                                                            <img src="assets/images/layout-2/media-banner/2.jpg"
                                                                 className="img-fluid "
                                                                 alt="banner"/>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-contant">
                                                                <div>
                                                                    <div className="product-detail">
                                                                        <ul className="rating">
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <p>rechargeable
                                                                                fan</p></a>
                                                                        <h6>$47.05 <span>$52.21</span></h6>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <button onClick="openCart()"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Add to cart"><i
                                                                            data-feather="shopping-cart"></i></button>
                                                                        <a href="javascript:void(0)"
                                                                           className="add-to-wish tooltip-top"
                                                                           data-tippy-content="Add to Wishlist"><i
                                                                            data-feather="heart"></i></a>
                                                                        <a href="javascript:void(0)"
                                                                           data-bs-toggle="modal"
                                                                           data-bs-target="#quick-view"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Quick View"><i
                                                                            data-feather="eye"></i></a>
                                                                        <a href="html/compare.html"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Compare"><i
                                                                            data-feather="refresh-cw"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media">
                                                        <a href="html/product-page(left-sidebar).html">
                                                            <img src="assets/images/layout-2/media-banner/3.jpg"
                                                                 className="img-fluid "
                                                                 alt="banner"/>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-contant">
                                                                <div>
                                                                    <div className="product-detail">
                                                                        <ul className="rating">
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <p>sumsung galaxy</p>
                                                                        </a>
                                                                        <h6>$57.05 <span>$75.21</span></h6>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <button onClick="openCart()"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Add to cart"><i
                                                                            data-feather="shopping-cart"></i></button>
                                                                        <a href="javascript:void(0)"
                                                                           className="add-to-wish tooltip-top"
                                                                           data-tippy-content="Add to Wishlist"><i
                                                                            data-feather="heart"></i></a>
                                                                        <a href="javascript:void(0)"
                                                                           data-bs-toggle="modal"
                                                                           data-bs-target="#quick-view"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Quick View"><i
                                                                            data-feather="eye"></i></a>
                                                                        <a href="html/compare.html"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Compare"><i
                                                                            data-feather="refresh-cw"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media-view">
                                                        <h5>View More</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="media-banner border-0">
                                                <div className="media-banner-box">
                                                    <div className="media-heading">
                                                        <h5>New Products</h5>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media">
                                                        <a href="html/product-page(left-sidebar).html">
                                                            <img src="assets/images/layout-2/media-banner/3.jpg"
                                                                 className="img-fluid "
                                                                 alt="banner"/>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-contant">
                                                                <div>
                                                                    <div className="product-detail">
                                                                        <ul className="rating">
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <p>sumsung galaxy</p>
                                                                        </a>
                                                                        <h6>$78.05 <span>$68.21</span></h6>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <button onClick="openCart()"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Add to cart"><i
                                                                            data-feather="shopping-cart"></i></button>
                                                                        <a href="javascript:void(0)"
                                                                           className="add-to-wish tooltip-top"
                                                                           data-tippy-content="Add to Wishlist"><i
                                                                            data-feather="heart"></i></a>
                                                                        <a href="javascript:void(0)"
                                                                           data-bs-toggle="modal"
                                                                           data-bs-target="#quick-view"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Quick View"><i
                                                                            data-feather="eye"></i></a>
                                                                        <a href="html/compare.html"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Compare"><i
                                                                            data-feather="refresh-cw"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media">
                                                        <a href="html/product-page(left-sidebar).html">
                                                            <img src="assets/images/layout-2/media-banner/1.jpg"
                                                                 className="img-fluid "
                                                                 alt="banner"/>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-contant">
                                                                <div>
                                                                    <div className="product-detail">
                                                                        <ul className="rating">
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <p>Bajaj GX-1
                                                                                Mixer</p></a>
                                                                        <h6>$72.05 <span>$63.21</span></h6>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <button onClick="openCart()"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Add to cart"><i
                                                                            data-feather="shopping-cart"></i></button>
                                                                        <a href="javascript:void(0)"
                                                                           className="add-to-wish tooltip-top"
                                                                           data-tippy-content="Add to Wishlist"><i
                                                                            data-feather="heart"></i></a>
                                                                        <a href="javascript:void(0)"
                                                                           data-bs-toggle="modal"
                                                                           data-bs-target="#quick-view"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Quick View"><i
                                                                            data-feather="eye"></i></a>
                                                                        <a href="html/compare.html"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Compare"><i
                                                                            data-feather="refresh-cw"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media">
                                                        <a href="html/product-page(left-sidebar).html">
                                                            <img src="assets/images/layout-2/media-banner/2.jpg"
                                                                 className="img-fluid "
                                                                 alt="banner"/>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-contant">
                                                                <div>
                                                                    <div className="product-detail">
                                                                        <ul className="rating">
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <p>rechargeable
                                                                                fan</p></a>
                                                                        <h6>82.05 <span>$75.21</span></h6>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <button onClick="openCart()"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Add to cart"><i
                                                                            data-feather="shopping-cart"></i></button>
                                                                        <a href="javascript:void(0)"
                                                                           className="add-to-wish tooltip-top"
                                                                           data-tippy-content="Add to Wishlist"><i
                                                                            data-feather="heart"></i></a>
                                                                        <a href="javascript:void(0)"
                                                                           data-bs-toggle="modal"
                                                                           data-bs-target="#quick-view"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Quick View"><i
                                                                            data-feather="eye"></i></a>
                                                                        <a href="html/compare.html"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Compare"><i
                                                                            data-feather="refresh-cw"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="media-banner-box">
                                                    <div className="media-view">
                                                        <h5>View More</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="media-banner border-0">
                                                <div className="media-banner-box">
                                                    <div className="media-heading">
                                                        <h5>New Products</h5>
                                                    </div>
                                                </div>

                                                <div className="media-banner-box">
                                                    <div className="media">
                                                        <a href="html/product-page(left-sidebar).html">
                                                            <img src="assets/images/layout-2/media-banner/2.jpg"
                                                                 className="img-fluid "
                                                                 alt="banner"/>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-contant">
                                                                <div>
                                                                    <div className="product-detail">
                                                                        <ul className="rating">
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <p>rechargeable
                                                                                fan</p></a>
                                                                        <h6>$79.05 <span>$47.21</span></h6>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <button onClick="openCart()"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Add to cart"><i
                                                                            data-feather="shopping-cart"></i></button>
                                                                        <a href="javascript:void(0)"
                                                                           className="add-to-wish tooltip-top"
                                                                           data-tippy-content="Add to Wishlist"><i
                                                                            data-feather="heart"></i></a>
                                                                        <a href="javascript:void(0)"
                                                                           data-bs-toggle="modal"
                                                                           data-bs-target="#quick-view"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Quick View"><i
                                                                            data-feather="eye"></i></a>
                                                                        <a href="html/compare.html"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Compare"><i
                                                                            data-feather="refresh-cw"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media">
                                                        <a href="html/product-page(left-sidebar).html">
                                                            <img src="assets/images/layout-2/media-banner/3.jpg"
                                                                 className="img-fluid "
                                                                 alt="banner"/>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-contant">
                                                                <div>
                                                                    <div className="product-detail">
                                                                        <ul className="rating">
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <p>sumsung galaxy</p>
                                                                        </a>
                                                                        <h6>$51.05 <span>$76.21</span></h6>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <button onClick="openCart()"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Add to cart"><i
                                                                            data-feather="shopping-cart"></i></button>
                                                                        <a href="javascript:void(0)"
                                                                           className="add-to-wish tooltip-top"
                                                                           data-tippy-content="Add to Wishlist"><i
                                                                            data-feather="heart"></i></a>
                                                                        <a href="javascript:void(0)"
                                                                           data-bs-toggle="modal"
                                                                           data-bs-target="#quick-view"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Quick View"><i
                                                                            data-feather="eye"></i></a>
                                                                        <a href="html/compare.html"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Compare"><i
                                                                            data-feather="refresh-cw"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media">
                                                        <a href="html/product-page(left-sidebar).html">
                                                            <img src="assets/images/layout-2/media-banner/1.jpg"
                                                                 className="img-fluid "
                                                                 alt="banner"/>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-contant">
                                                                <div>
                                                                    <div className="product-detail">
                                                                        <ul className="rating">
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                        <a href="html/product-page(left-sidebar).html">
                                                                            <p>Bajaj GX-1
                                                                                Mixer</p></a>
                                                                        <h6>$24.05 <span>$56.21</span></h6>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <button onClick="openCart()"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Add to cart"><i
                                                                            data-feather="shopping-cart"></i></button>
                                                                        <a href="javascript:void(0)"
                                                                           className="add-to-wish tooltip-top"
                                                                           data-tippy-content="Add to Wishlist"><i
                                                                            data-feather="heart"></i></a>
                                                                        <a href="javascript:void(0)"
                                                                           data-bs-toggle="modal"
                                                                           data-bs-target="#quick-view"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Quick View"><i
                                                                            data-feather="eye"></i></a>
                                                                        <a href="html/compare.html"
                                                                           className="tooltip-top"
                                                                           data-tippy-content="Compare"><i
                                                                            data-feather="refresh-cw"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-banner-box">
                                                    <div className="media-view">
                                                        <h5>View More</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="myCartId" className="add_to_cart top ">
                    <a href="javascript:void(0)" className="overlay" onClick={this.closeCart}></a>
                    <div className="cart-inner">
                        <div className="cart_top">
                            <h3>my cart1</h3>
                            <div className="close-cart">
                                <a href="javascript:void(0)" onClick={this.closeCart}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="cart_media">
                            <ul className="cart_product">
                                <li>
                                    <div className="media">
                                        <a href="html/product-page(left-sidebar).html">
                                            <img alt="megastore1" className="me-3"
                                                 src="assets/images/layout-2/product/1.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            <a href="html/product-page(left-sidebar).html">
                                                <h4>redmi not 3</h4>
                                            </a>
                                            <h6>
                                                $80.00 <span>$120.00</span>
                                            </h6>
                                            <div className="addit-box">
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <button className="qty-minus"></button>
                                                        <input className="qty-adj form-control" type="number"
                                                               value="1"/>
                                                        <button className="qty-plus"></button>
                                                    </div>
                                                </div>
                                                <div className="pro-add">
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                       data-bs-target="#edit-product">
                                                        <i data-feather="edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <i data-feather="trash-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <a href="html/product-page(left-sidebar).html">
                                            <img alt="megastore1" className="me-3"
                                                 src="assets/images/layout-2/product/2.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            <a href="html/product-page(left-sidebar).html">
                                                <h4>Double Door Refrigerator</h4>
                                            </a>
                                            <h6>
                                                $80.00 <span>$120.00</span>
                                            </h6>
                                            <div className="addit-box">
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <button className="qty-minus"></button>
                                                        <input className="qty-adj form-control" type="number"
                                                               value="1"/>
                                                        <button className="qty-plus"></button>
                                                    </div>
                                                </div>
                                                <div className="pro-add">
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                       data-bs-target="#edit-product">
                                                        <i data-feather="edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <i data-feather="trash-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <a href="html/product-page(left-sidebar).html">
                                            <img alt="megastore1" className="me-3"
                                                 src="assets/images/layout-2/product/3.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            <a href="html/product-page(left-sidebar).html">
                                                <h4>woman hande bag</h4>
                                            </a>
                                            <h6>
                                                $80.00 <span>$120.00</span>
                                            </h6>
                                            <div className="addit-box">
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <button className="qty-minus"></button>
                                                        <input className="qty-adj form-control" type="number"
                                                               value="1"/>
                                                        <button className="qty-plus"></button>
                                                    </div>
                                                </div>
                                                <div className="pro-add">
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                       data-bs-target="#edit-product">
                                                        <i data-feather="edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <i data-feather="trash-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="cart_total">
                                <li>
                                    subtotal : <span>$1050.00</span>
                                </li>
                                <li>
                                    shpping <span>free</span>
                                </li>
                                <li>
                                    taxes <span>$0.00</span>
                                </li>
                                <li>
                                    <div className="total">
                                        total<span>$1050.00</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="buttons">
                                        <a onClick={this.viewCart} className="btn btn-solid btn-sm">view cart</a>
                                        <a onClick={this.checkout} className="btn btn-solid btn-sm ">checkout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="cartPageId" className="display-none-div">
                    <div className="breadcrumb-main ">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="breadcrumb-contain">
                                        <div>
                                            <h2>cart</h2>
                                            <ul>
                                                <li><a href="javascript:void(0)">home</a></li>
                                                <li><i className="fa fa-angle-double-right"></i></li>
                                                <li><a href="javascript:void(0)">cart</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="cart-section section-big-py-space b-g-light">
                        <div className="custom-container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table cart-table table-responsive-xs">
                                        <thead>
                                        <tr className="table-head">
                                            <th scope="col">image</th>
                                            <th scope="col">product name</th>
                                            <th scope="col">price</th>
                                            <th scope="col">quantity</th>
                                            <th scope="col">action</th>
                                            <th scope="col">total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a href="javascript:void(0)"><img
                                                    src="../assets/images/layout-3/product/1.jpg" alt="cart"
                                                    className=" "/>
                                                </a>
                                            </td>
                                            <td><a href="javascript:void(0)">cotton shirt</a>
                                                <div className="mobile-cart-content">
                                                    <div className="col-xs-3">
                                                        <div className="qty-box">
                                                            <div className="input-group">
                                                                <input type="text" name="quantity"
                                                                       className="form-control input-number" value="1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">$63.00</h2></div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color"><a href="javascript:void(0)"
                                                                                    className="icon"><i
                                                            className="ti-close"></i></a></h2></div>
                                                </div>
                                            </td>
                                            <td>
                                                <h2>$63.00</h2></td>
                                            <td>
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <input type="number" name="quantity"
                                                               className="form-control input-number" value="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0)" className="icon"><i
                                                className="ti-close"></i></a></td>
                                            <td>
                                                <h2 className="td-color">$4539.00</h2></td>
                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a href="javascript:void(0)"><img
                                                    src="../assets/images/layout-3/product/4.jpg" alt="cart"
                                                    className=" "/></a>
                                            </td>
                                            <td><a href="javascript:void(0)">cotton shirt</a>
                                                <div className="mobile-cart-content">
                                                    <div className="col-xs-3">
                                                        <div className="qty-box">
                                                            <div className="input-group">
                                                                <input type="number" name="quantity"
                                                                       className="form-control input-number" value="1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">$63.00</h2></div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color"><a href="javascript:void(0)"
                                                                                    className="icon"><i
                                                            className="ti-close"></i></a></h2></div>
                                                </div>
                                            </td>
                                            <td>
                                                <h2>$63.00</h2></td>
                                            <td>
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <input type="number" name="quantity"
                                                               className="form-control input-number" value="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0)" className="icon"><i
                                                className="ti-close"></i></a></td>
                                            <td>
                                                <h2 className="td-color">$4539.00</h2></td>
                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a href="javascript:void(0)"><img
                                                    src="../assets/images/layout-3/product/3.jpg" alt="cart"
                                                    className=" "/></a>
                                            </td>
                                            <td><a href="javascript:void(0)">cotton shirt</a>
                                                <div className="mobile-cart-content">
                                                    <div className="col-xs-3">
                                                        <div className="qty-box">
                                                            <div className="input-group">
                                                                <input type="number" name="quantity"
                                                                       className="form-control input-number" value="1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">$63.00</h2></div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color"><a href="javascript:void(0)"
                                                                                    className="icon"><i
                                                            className="ti-close"></i></a></h2></div>
                                                </div>
                                            </td>
                                            <td>
                                                <h2>$63.00</h2></td>
                                            <td>
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <input type="number" name="quantity"
                                                               className="form-control input-number" value="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0)" className="icon"><i
                                                className="ti-close"></i></a></td>
                                            <td>
                                                <h2 className="td-color">$4539.00</h2></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table cart-table table-responsive-md">
                                        <tfoot>
                                        <tr>
                                            <td>total price :</td>
                                            <td>
                                                <h2>$6935.00</h2></td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="row cart-buttons">
                                <div className="col-12">
                                    <a className="btn btn-normal">continue shopping</a>
                                    <a className="btn btn-normal ms-3">check out</a>
                                    <a onClick={this.backToHome} className="btn btn-normal ms-3">Back</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="checkOutId" class="display-none-div">
                    <div className="breadcrumb-main ">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="breadcrumb-contain">
                                        <div>
                                            <h2>checkout</h2>
                                            <ul>
                                                <li><a href="index.html">home</a></li>
                                                <li><i className="fa fa-angle-double-right"></i></li>
                                                <li><a href="javascript:void(0)">checkout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section-big-py-space b-g-light">
                        <div className="custom-container">
                            <div className="checkout-page contact-page">
                                <div className="checkout-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                                <div className="checkout-title">
                                                    <h3>Billing Details</h3></div>
                                                <div className="theme-form">
                                                    <div className="row check-out ">

                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label>First Name</label>
                                                            <input type="text" name="field-name" value=""
                                                                   placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label>Last Name</label>
                                                            <input type="text" name="field-name" value=""
                                                                   placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label className="field-label">Phone</label>
                                                            <input type="text" name="field-name" value=""
                                                                   placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label className="field-label">Email Address</label>
                                                            <input type="text" name="field-name" value=""
                                                                   placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                            <label className="field-label">Country</label>
                                                            <select>
                                                                <option>India</option>
                                                                <option>South Africa</option>
                                                                <option>United State</option>
                                                                <option>Australia</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                            <label className="field-label">Address</label>
                                                            <input type="text" name="field-name" value=""
                                                                   placeholder="Street address"/>
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                            <label className="field-label">Town/City</label>
                                                            <input type="text" name="field-name" value=""
                                                                   placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                            <label className="field-label">State / County</label>
                                                            <input type="text" name="field-name" value=""
                                                                   placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                            <label className="field-label">Postal Code</label>
                                                            <input type="text" name="field-name" value=""
                                                                   placeholder=""/>
                                                        </div>
                                                        <div
                                                            className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <input type="checkbox" name="shipping-option"
                                                                   id="account-option"/> &ensp;
                                                                <label htmlFor="account-option">Create An
                                                                    Account?</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                                <div className="checkout-details theme-form  section-big-mt-space">
                                                    <div className="order-box">
                                                        <div className="title-box">
                                                            <div>Product <span>Total</span></div>
                                                        </div>
                                                        <ul className="qty">
                                                            <li>Pink Slim Shirt × 1 <span>$25.10</span></li>
                                                            <li>SLim Fit Jeans × 1 <span>$555.00</span></li>
                                                        </ul>
                                                        <ul className="sub-total">
                                                            <li>Subtotal <span className="count">$380.10</span></li>
                                                            <li>Shipping
                                                                <div className="shipping">
                                                                    <div className="shopping-option">
                                                                        <input type="checkbox" name="free-shipping"
                                                                               id="free-shipping"/>
                                                                            <label htmlFor="free-shipping">Free
                                                                                Shipping</label>
                                                                    </div>
                                                                    <div className="shopping-option">
                                                                        <input type="checkbox" name="local-pickup"
                                                                               id="local-pickup"/>
                                                                            <label htmlFor="local-pickup">Local
                                                                                Pickup</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="total">
                                                            <li>Total <span className="count">$620.00</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="payment-box">
                                                        <div className="upper-box">
                                                            <div className="payment-options">
                                                                <ul>
                                                                    <li>
                                                                        <div className="radio-option">
                                                                            <input type="radio" name="payment-group"
                                                                                   id="payment-1" checked="checked"/>
                                                                                <label htmlFor="payment-1">Check
                                                                                    Payments<span
                                                                                        className="small-text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span></label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="radio-option">
                                                                            <input type="radio" name="payment-group"
                                                                                   id="payment-2"/>
                                                                                <label htmlFor="payment-2">Cash On
                                                                                    Delivery<span
                                                                                        className="small-text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span></label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="radio-option paypal">
                                                                            <input type="radio" name="payment-group"
                                                                                   id="payment-3"/>
                                                                                <label
                                                                                    htmlFor="payment-3">PayPal</label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="row cart-buttons">
                                                            <div className="col-12">
                                                                <a className="btn btn-normal ms-3">Place Order</a>
                                                                <a onClick={this.backToHome} className="btn btn-normal ms-3">Back</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="myAccount" className="add_to_cart right account-bar">
                    <a href="javascript:void(0)" className="overlay" onClick="closeAccount()"></a>
                    <div className="cart-inner">
                        <div className="cart_top">
                            <h3>my account</h3>
                            <div className="close-cart">
                                <a href="javascript:void(0)" onClick="closeAccount()">
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <form className="theme-form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Email" required=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="review">Password</label>
                                <input type="password" className="form-control" id="review"
                                       placeholder="Enter your password" required=""/>
                            </div>
                            <div className="form-group">
                                <a href="javascript:void(0)" className="btn btn-solid btn-md btn-block ">Login</a>
                            </div>
                            <div className="accout-fwd">
                                <a href="html/forget-pwd.html" className="d-block"><h5>forget password?</h5></a>
                                <a href="html/register.html" className="d-block"><h6>you have no account ?<span>signup now</span>
                                </h6></a>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="wishlist_side" className="add_to_cart right ">
                    <a className="overlay" onClick={this.closeAccount}></a>
                    <div className="cart-inner">
                        <div className="cart_top">
                            <h3>my wishlist</h3>
                            <div className="close-cart">
                                <a onClick={this.closeAccount}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="cart_media">
                            <ul className="cart_product">
                                <li>
                                    <div className="media">
                                        <a href="product-page(left-sidebar).html">
                                            <img alt="megastore1" className="me-3"
                                                 src="../assets/images/layout-2/product/1.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            <a href="product-page(left-sidebar).html">
                                                <h4>redmi not 3</h4>
                                            </a>
                                            <h6>
                                                $80.00 <span>$120.00</span>
                                            </h6>
                                            <div className="addit-box">
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <button className="qty-minus"></button>
                                                        <input className="qty-adj form-control" type="number"
                                                               value="1"/>
                                                        <button className="qty-plus"></button>
                                                    </div>
                                                </div>
                                                <div className="pro-add">
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                       data-bs-target="#edit-product">
                                                        <i data-feather="edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <i data-feather="trash-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <a href="product-page(left-sidebar).html">
                                            <img alt="megastore1" className="me-3"
                                                 src="../assets/images/layout-2/product/2.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            <a href="product-page(left-sidebar).html">
                                                <h4>Double Door Refrigerator</h4>
                                            </a>
                                            <h6>
                                                $80.00 <span>$120.00</span>
                                            </h6>
                                            <div className="addit-box">
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <button className="qty-minus"></button>
                                                        <input className="qty-adj form-control" type="number"
                                                               value="1"/>
                                                        <button className="qty-plus"></button>
                                                    </div>
                                                </div>
                                                <div className="pro-add">
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                       data-bs-target="#edit-product">
                                                        <i data-feather="edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <i data-feather="trash-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <a href="product-page(left-sidebar).html">
                                            <img alt="megastore1" className="me-3"
                                                 src="../assets/images/layout-2/product/3.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            <a href="product-page(left-sidebar).html">
                                                <h4>woman hande bag</h4>
                                            </a>
                                            <h6>
                                                $80.00 <span>$120.00</span>
                                            </h6>
                                            <div className="addit-box">
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <button className="qty-minus"></button>
                                                        <input className="qty-adj form-control" type="number"
                                                               value="1"/>
                                                        <button className="qty-plus"></button>
                                                    </div>
                                                </div>
                                                <div className="pro-add">
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                       data-bs-target="#edit-product">
                                                        <i data-feather="edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <i data-feather="trash-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="cart_total">
                                <li>
                                    subtotal : <span>$1050.00</span>
                                </li>
                                <li>
                                    shpping <span>free</span>
                                </li>
                                <li>
                                    taxes <span>$0.00</span>
                                </li>
                                <li>
                                    <div className="total">
                                        total<span>$1050.00</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="buttons">
                                        <a onClick={this.loadDetailWishList} className="btn btn-solid btn-block btn-md">view
                                            wislist</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="wishListDetailId" className="display-none-div">
                    <div className="breadcrumb-main ">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="breadcrumb-contain">
                                        <div>
                                            <h2>wishlist</h2>
                                            <ul>
                                                <li><a href="index.html">home</a></li>
                                                <li><i className="fa fa-angle-double-right"></i></li>
                                                <li><a href="javascript:void(0)">wishlist</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="wishlist-section section-big-py-space b-g-light">
                        <div className="custom-container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table cart-table table-responsive-xs">
                                        <thead>
                                        <tr className="table-head">
                                            <th scope="col">image</th>
                                            <th scope="col">product name</th>
                                            <th scope="col">price</th>
                                            <th scope="col">availability</th>
                                            <th scope="col">action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a href="javascript:void(0)"><img
                                                    src="../assets/images/layout-2/product/1.jpg" alt="product"
                                                    className="img-fluid  "/></a>
                                            </td>
                                            <td><a href="javascript:void(0)">cotton shirt</a>
                                                <div className="mobile-cart-content">
                                                    <div className="col-xs-3">
                                                        <p>in stock</p>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">$63.00</h2></div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color"><a href="javascript:void(0)"
                                                                                    className="icon me-1"><i
                                                            className="ti-close"></i> </a><a href="javascript:void(0)"
                                                                                             className="cart"><i
                                                            className="ti-shopping-cart"></i></a></h2></div>
                                                </div>
                                            </td>
                                            <td>
                                                <h2>$63.00</h2></td>
                                            <td>
                                                <p>in stock</p>
                                            </td>
                                            <td><a href="javascript:void(0)" className="icon me-3"><i
                                                className="ti-close"></i> </a><a href="javascript:void(0)"
                                                                                 className="cart"><i
                                                className="ti-shopping-cart"></i></a></td>
                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a href="javascript:void(0)"><img
                                                    src="../assets/images/layout-2/product/2.jpg" alt="product"
                                                    className="img-fluid  "/></a>
                                            </td>
                                            <td><a href="javascript:void(0)">cotton shirt</a>
                                                <div className="mobile-cart-content">
                                                    <div className="col-xs-3">
                                                        <p>in stock</p>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">$63.00</h2></div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color"><a href="javascript:void(0)"
                                                                                    className="icon me-1"><i
                                                            className="ti-close"></i> </a><a href="javascript:void(0)"
                                                                                             className="cart"><i
                                                            className="ti-shopping-cart"></i></a></h2></div>
                                                </div>
                                            </td>
                                            <td>
                                                <h2>$63.00</h2></td>
                                            <td>
                                                <p>in stock</p>
                                            </td>
                                            <td><a href="javascript:void(0)" className="icon me-3"><i
                                                className="ti-close"></i> </a><a href="javascript:void(0)"
                                                                                 className="cart"><i
                                                className="ti-shopping-cart"></i></a></td>
                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a href="javascript:void(0)"><img
                                                    src="../assets/images/layout-1/product/3.jpg" alt="product"
                                                    className="img-fluid  "/></a>
                                            </td>
                                            <td><a href="javascript:void(0)">cotton shirt</a>
                                                <div className="mobile-cart-content">
                                                    <div className="col-xs-3">
                                                        <p>in stock</p>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">$63.00</h2></div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color"><a href="javascript:void(0)"
                                                                                    className="icon me-1"><i
                                                            className="ti-close"></i> </a><a href="javascript:void(0)"
                                                                                             className="cart"><i
                                                            className="ti-shopping-cart"></i></a></h2></div>
                                                </div>
                                            </td>
                                            <td>
                                                <h2>$63.00</h2></td>
                                            <td>
                                                <p>in stock</p>
                                            </td>
                                            <td><a href="javascript:void(0)" className="icon me-3"><i
                                                className="ti-close"></i> </a><a href="javascript:void(0)"
                                                                                 className="cart"><i
                                                className="ti-shopping-cart"></i></a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row wishlist-buttons">
                                <div className="col-12">
                                    <a className="btn btn-normal">continue shopping</a>
                                    <a className="btn btn-normal">check out</a>
                                    <a onClick={this.backToHome} className="btn btn-normal ms-3">Back</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        );
    }
}

export {Home}
