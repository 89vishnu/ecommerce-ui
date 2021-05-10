import React, { Component } from "react";
class TopToBottomBar extends Component {
    render() {
        return (
            <div className="collapse  nav-desk" id="navbarToggleExternalContent">
                <ul className="nav-cat title-font">
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/01.png" alt="category-product"/>
                        western ware</a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/02.png"
                        alt="category-product"/> TV,
                        Appliances</a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/03.png" alt="category-product"/>
                        Pets Products</a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/04.png" alt="category-product"/>
                        Car, Motorbike</a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/05.png" alt="category-product"/>
                        Industrial Products</a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/06.png" alt="category-product"/>
                        Beauty, Health Products</a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/07.png" alt="category-product"/>
                        Grocery Products </a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/08.png" alt="category-product"/>
                        Sports</a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/09.png" alt="category-product"/>
                        Bags, Luggage</a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/10.png" alt="category-product"/>
                        Movies, Music </a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/11.png" alt="category-product"/>
                        Video Games</a></li>
                    <li><a href="html/category-page(left-sidebar).html"><img
                        src="assets/images/layout-1/nav-img/12.png" alt="category-product"/>
                        Toys, Baby Products</a></li>
                    <li>
                        <ul className="mor-slide-open">
                            <li><a href="html/category-page(left-sidebar).html"><img
                                src="assets/images/layout-1/nav-img/08.png"
                                alt="category-product"/> Sports</a></li>
                            <li><a href="html/category-page(left-sidebar).html"><img
                                src="assets/images/layout-1/nav-img/09.png"
                                alt="category-product"/> Bags, Luggage</a></li>
                            <li><a href="html/category-page(left-sidebar).html"><img
                                src="assets/images/layout-1/nav-img/10.png"
                                alt="category-product"/> Movies, Music </a></li>
                            <li><a href="html/category-page(left-sidebar).html"><img
                                src="assets/images/layout-1/nav-img/11.png"
                                alt="category-product"/> Video Games</a></li>
                            <li><a href="html/category-page(left-sidebar).html"><img
                                src="assets/images/layout-1/nav-img/12.png"
                                alt="category-product"/> Toys, Baby Products</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="mor-slide-click">mor category <i
                            className="fa fa-angle-down pro-down"></i><i
                            className="fa fa-angle-up pro-up"></i></a>
                    </li>
                </ul>
            </div>
        );
    }
}
export {TopToBottomBar};
