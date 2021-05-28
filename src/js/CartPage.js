import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class CartPage extends Component {
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
        document.getElementById("cartPageId").classList.add('display-none-div');
        document.getElementById("checkOutId").classList.remove('display-none-div');
    }
    render() {
        return(
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
                                <a onClick={this.checkOut} className="btn btn-normal ms-3">check out</a>
                                <a onClick={this.backToHome} className="btn btn-normal ms-3">Back</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export {CartPage}
