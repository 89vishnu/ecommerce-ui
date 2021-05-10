import React, {Component} from "react";

class FeaturesDropDownBar extends Component {
    render() {
        return (
            <div>
                <li>
                    <div className="container">
                        <div className="row">
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>portfolio</h5></div>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a href="html/grid-2-col.html">portfolio
                                                grid 222</a></li>
                                            <li><a href="html/grid-3-col.html">portfolio
                                                grid 3</a></li>
                                            <li><a href="html/grid-4-col.html">portfolio
                                                grid 4</a></li>
                                            <li><a href="html/grid-6-col.html">portfolio
                                                grid 6</a></li>
                                            <li><a href="html/masonary-2-grid.html">mesonary
                                                grid 2</a></li>
                                            <li><a href="html/masonary-3-grid.html">mesonary
                                                grid 3</a></li>
                                            <li><a href="html/masonary-4-grid.html">mesonary
                                                grid 4</a></li>
                                            <li><a
                                                href="html/masonary-fullwidth.html">mesonary
                                                full width</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>add to cart</h5></div>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a href="html/layout-5.html">cart
                                                modal
                                                popup</a></li>
                                            <li><a href="html/layout-6.html">qty.
                                                counter </a></li>
                                            <li><a href="html/index.html">cart
                                                top</a></li>
                                            <li><a href="html/layout-2.html">cart
                                                bottom</a>
                                            </li>
                                            <li><a href="html/layout-3.html">cart
                                                left</a>
                                            </li>
                                            <li><a href="html/layout-4.html">cart
                                                right</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>shortcodes</h5></div>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a
                                                href="html/element-title.html">title</a>
                                            </li>
                                            <li><a href="html/element-banner.html">collection
                                                banner</a></li>
                                            <li><a
                                                href="html/element-category.html">category</a>
                                            </li>
                                            <li>
                                                <a href="html/element-service.html">service</a>
                                            </li>
                                            <li><a
                                                href="html/element-image-ratio.html">image
                                                size ratio</a></li>
                                            <li><a
                                                href="html/element-tab.html">tab</a>
                                            </li>
                                            <li>
                                                <a href="html/element-counter.html">counter</a>
                                            </li>
                                            <li><a
                                                href="html/element-pricingtable.html">pricing
                                                table</a></li>
                                            <li><a
                                                href="html/element-team.html">team</a>
                                            </li>
                                            <li><a
                                                href="html/element-testimonial.html">testimonial</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col mega-box">
                                <div className="link-section">
                                    <div className="menu-title">
                                        <h5>email template</h5>
                                    </div>
                                    <div className="menu-content">
                                        <ul>
                                            <li>
                                                <a href="email-template/email-order-success.html">order
                                                    success</a></li>
                                            <li>
                                                <a href="email-template/email-order-success-tow.html">order
                                                    success 2</a></li>
                                            <li>
                                                <a href="email-template/email-template.html">email
                                                    template</a></li>
                                            <li>
                                                <a href="email-template/email-template-tow.html">email
                                                    template 2</a></li>
                                        </ul>
                                    </div>
                                    <div className="menu-title menu-secon-title">
                                        <h5>Easy to use</h5>
                                    </div>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a href="html/button.html">element
                                                button</a></li>
                                            <li><a href="html/instagram.html">element
                                                instagram</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col mega-box product ">
                                <div className="mega-img">
                                    <img src="assets/images/mega-banner.jpg"
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

export {FeaturesDropDownBar};
