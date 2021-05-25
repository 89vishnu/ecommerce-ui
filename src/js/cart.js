import React, {Component} from "react";

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    inputSet = (e) => {
        console.log(e)
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <div id="cart_side" class="add_to_cart top ">
                <a href="javascript:void(0)" class="overlay" onclick="closeCart()"></a>
                <div class="cart-inner">
                    <div class="cart_top">
                        <h3>my cart1</h3>
                        <div class="close-cart">
                            <a href="javascript:void(0)" onclick="closeCart()">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <div class="cart_media">
                        <ul class="cart_product">
                            <li>
                                <div class="media">
                                    <a href="html/product-page(left-sidebar).html">
                                        <img alt="megastore1" class="me-3" src="assets/images/layout-2/product/1.jpg"/>
                                    </a>
                                    <div class="media-body">
                                        <a href="html/product-page(left-sidebar).html">
                                            <h4>redmi not 3</h4>
                                        </a>
                                        <h6>
                                            $80.00 <span>$120.00</span>
                                        </h6>
                                        <div class="addit-box">
                                            <div class="qty-box">
                                                <div class="input-group">
                                                    <button class="qty-minus"></button>
                                                    <input class="qty-adj form-control" type="number" value="1"/>
                                                    <button class="qty-plus"></button>
                                                </div>
                                            </div>
                                            <div class="pro-add">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit-product" >
                                                    <i data-feather="edit"></i>
                                                </a>
                                                <a href="javascript:void(0)">
                                                    <i  data-feather="trash-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <a href="html/product-page(left-sidebar).html">
                                        <img alt="megastore1" class="me-3" src="assets/images/layout-2/product/2.jpg"/>
                                    </a>
                                    <div class="media-body">
                                        <a href="html/product-page(left-sidebar).html">
                                            <h4>Double Door Refrigerator</h4>
                                        </a>
                                        <h6>
                                            $80.00 <span>$120.00</span>
                                        </h6>
                                        <div class="addit-box">
                                            <div class="qty-box">
                                                <div class="input-group">
                                                    <button class="qty-minus"></button>
                                                    <input class="qty-adj form-control" type="number" value="1"/>
                                                    <button class="qty-plus"></button>
                                                </div>
                                            </div>
                                            <div class="pro-add">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit-product" >
                                                    <i data-feather="edit"></i>
                                                </a>
                                                <a href="javascript:void(0)">
                                                    <i  data-feather="trash-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <a href="html/product-page(left-sidebar).html">
                                        <img alt="megastore1" class="me-3" src="assets/images/layout-2/product/3.jpg"/>
                                    </a>
                                    <div class="media-body">
                                        <a href="html/product-page(left-sidebar).html">
                                            <h4>woman hande bag</h4>
                                        </a>
                                        <h6>
                                            $80.00 <span>$120.00</span>
                                        </h6>
                                        <div class="addit-box">
                                            <div class="qty-box">
                                                <div class="input-group">
                                                    <button class="qty-minus"></button>
                                                    <input class="qty-adj form-control" type="number" value="1"/>
                                                    <button class="qty-plus"></button>
                                                </div>
                                            </div>
                                            <div class="pro-add">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit-product" >
                                                    <i data-feather="edit"></i>
                                                </a>
                                                <a href="javascript:void(0)">
                                                    <i  data-feather="trash-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="cart_total">
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
                                <div class="total">
                                    total<span>$1050.00</span>
                                </div>
                            </li>
                            <li>
                                <div class="buttons">
                                    <a href="html/cart.html" class="btn btn-solid btn-sm">view cart</a>
                                    <a href="html/checkout.html" class="btn btn-solid btn-sm ">checkout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export {Cart};
