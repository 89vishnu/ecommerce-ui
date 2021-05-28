import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class MyWishListDetail extends Component {
    constructor(props) {
        super(props);
    }
    backToHome() {
        document.getElementById("homeMiddleContent").classList.remove('display-none-div');
        document.getElementById("cartPageId").classList.add('display-none-div');
        document.getElementById("checkOutId").classList.add('display-none-div');
        document.getElementById("myWishListDetailId").classList.add('display-none-div');
    }
    checkOut() {
        document.getElementById("myWishListDetailId").classList.add('display-none-div');
        document.getElementById("checkOutId").classList.remove('display-none-div');
    }
    render() {
        return(
            <div id="myWishListDetailId" className="display-none-div">
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
                                <a onClick={this.checkOut} className="btn btn-normal">check out</a>
                                <a onClick={this.backToHome} className="btn btn-normal ms-3">Back</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export {MyWishListDetail}
