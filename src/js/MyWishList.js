import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class MyWishList extends Component {
    constructor(props) {
        super(props);
    }
    closeAccount() {
        document.getElementById("myWishList").classList.remove('open-side');
    }
    loadDetailWishList() {
        document.getElementById("homeMiddleContent").classList.add('display-none-div');
        document.getElementById("myWishList").classList.remove('open-side');
        document.getElementById("myWishListDetailId").classList.remove('display-none-div');
        document.getElementById("cartPageId").classList.add('display-none-div');
        document.getElementById("checkOutId").classList.add('display-none-div');
    }
    render() {
        return (
            <div id="myWishList" className="add_to_cart right ">
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
                                    <a onClick={this.loadDetailWishList} className="btn btn-solid btn-block btn-md">view wishlist</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export {MyWishList}
