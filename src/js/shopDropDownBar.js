import React, {Component} from "react";

class ShopDropDownBar extends Component {
    render() {
        return (
            <div>
                <li><a href="html/category-page(left-sidebar).html">left sidebar1</a>
                </li>
                <li><a href="html/category-page(right-sidebar).html">right
                    sidebar</a></li>
                <li><a href="html/category-page(no-sidebar).html">no sidebar</a>
                </li>
                <li><a href="html/category-page(sidebar-popup).html">sidebar
                    popup</a></li>
                <li><a href="html/category-page(metro).html">metro </a></li>
                <li><a href="html/category-page(full-width).html">full width </a>
                </li>
                <li><a href="html/category-page(infinite-scroll).html">infinite
                    scroll</a>
                </li>
                <li><a href="html/category-page(3-grid).html">3 grid</a></li>
                <li><a href="html/category-page(6-grid).html">6 grid</a></li>
                <li><a href="html/category-page(list-view).html">list view</a></li>
            </div>
        );
    }
}

export {ShopDropDownBar};
