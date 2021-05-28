import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class HomeMiddleContent extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="homeMiddleContent" className="adding-padding-top-space">
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

                <section className="brand-panel">
                    <div className="brand-panel-box">
                        <div className="brand-panel-contain ">
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
        );
    }

}
export {HomeMiddleContent}
