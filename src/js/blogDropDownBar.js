import React, {Component} from "react";

class BlogDropDownBar extends Component {
    render() {
        return (
            <div>
                <li><a href="html/blog(left-sidebar).html">left sidebar</a></li>
                <li><a href="html/blog(right-sidebar).html">right sidebar</a></li>
                <li><a href="html/blog(no-sidebar).html">no sidebar</a></li>
                <li><a href="html/blog-details.html">blog details</a></li>
                <li><a href="html/blog-creative(left-sidebar).html">creative left
                    sidebar</a></li>
            </div>
        );
    }
}

export {BlogDropDownBar};
