import React, { Component } from "react";
 class SideBar extends Component {
    render() {
        return (
            <div id="myAccount" class="add_to_cart right account-bar">
                <a href="javascript:void(0)" class="overlay" onClick={this.props.closeAccount}></a>
                <div class="cart-inner">
                    <div class="cart_top">
                        <h3>my account11</h3>
                        <div class="close-cart">
                            <a href="javascript:void(0)" onClick={this.props.closeAccount}>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <form class="theme-form">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" id="email" placeholder="Email" required="" />
                        </div>
                        <div class="form-group">
                            <label for="review">Password</label>
                            <input type="password" class="form-control" id="review" placeholder="Enter your password" required="" />
                        </div>
                        <div class="form-group">
                            <a href="javascript:void(0)" class="btn btn-solid btn-md btn-block ">Login</a>
                        </div>
                        <div class="accout-fwd">
                            <a href="html/forget-pwd.html" class="d-block"><h5>forget password?</h5></a>
                            <a href="html/register.html" class="d-block"><h6 >you have no account ?<span>signup now</span></h6></a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }



}
export default SideBar;