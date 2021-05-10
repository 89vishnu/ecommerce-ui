

import React, {Component} from "react";

class ProductDropDownBar extends Component {
    render() {
        return (
            <div>
                <li>
                    <div className="container">
                        <div className="row">
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>sidebar</h5>
                                    </div>
                                    <div className="menu-content">
                                        <ul>
                                            <li>
                                                <a href="html/product-page(left-sidebar).html">left
                                                    sidebar</a></li>
                                            <li>
                                                <a href="html/product-page(right-sidebar).html">right
                                                    sidebar</a></li>
                                            <li>
                                                <a href="html/product-page(no-sidebar).html">non
                                                    sidebar</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>bonus layout</h5>
                                    </div>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a
                                                href="html/product-page(bundle).html">bundle</a>
                                            </li>
                                            <li>
                                                <a href="html/product-page(image-swatch).html">image
                                                    swatch</a></li>
                                            <li>
                                                <a href="html/product-page(vertical-tab).html">vertical
                                                    tab</a></li>
                                            <li>
                                                <a href="html/product-page(video-thumbnail).html">video
                                                    thumbnail</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>product layout </h5>
                                    </div>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a
                                                href="html/product-page(4-image).html">4
                                                image </a></li>
                                            <li><a
                                                href="html/product-page(sticky).html">sticky</a>
                                            </li>
                                            <li><a
                                                href="html/product-page(accordian).html">accordian</a>
                                            </li>
                                            <li><a
                                                href="html/product-page(360-view).html">360
                                                view</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>thumbnail image</h5>
                                    </div>
                                    <div className="menu-content">
                                        <ul>
                                            <li>
                                                <a href="html/product-page(left-image).html">left
                                                    image</a></li>
                                            <li>
                                                <a href="html/product-page(right-image).html">right
                                                    image</a></li>
                                            <li>
                                                <a href="html/product-page(image-outside).html">image
                                                    outside</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>3 column</h5>
                                    </div>
                                    <div className="menu-content">
                                        <ul>
                                            <li>
                                                <a href="html/product-page(3-col-left).html">thumbnail
                                                    left</a></li>
                                            <li>
                                                <a href="html/product-page(3-col-right).html">thumbnail
                                                    right</a></li>
                                            <li><a
                                                href="html/product-page(3-column).html">thubnail
                                                bottom</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>product element</h5>
                                    </div>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a
                                                href="html/element-productbox.html">product
                                                box</a></li>
                                            <li><a
                                                href="html/element-product-slider.html">product
                                                slider</a></li>
                                            <li><a
                                                href="html/element-no_slider.html">no
                                                slider</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row menu-banner">
                            <div className="col-lg-6">
                                <div>
                                    <img src="assets/images/menu-banner1.jpg"
                                         alt="menu-banner" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <img src="assets/images/menu-banner2.jpg"
                                         alt="menu-banner" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export {ProductDropDownBar};
