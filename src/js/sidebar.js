import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            password: null,
            firstName: null,
            lastName: null
        }
    }

    login(event) {
        var loginDetails = {
            emailId: this.state.emailId,
            password: this.state.password
        }
        console.log(" emailid : " + this.state.emailId);
        console.log(" password  : " + this.state.password);
        console.log(event.toString());
        console.log(" loginDetails : " + loginDetails.emailId);
    }

    signUp(event) {
        var signUpDetails = {
            emailId: this.state.emailId,
            password: this.state.password,
            password1: this.state.password1,
            password2: this.state.password2,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        console.log(signUpDetails.toString());
        console.log(signUpDetails.firstName);
        console.log(signUpDetails.lastName);
        console.log(signUpDetails.emailId);
        console.log(signUpDetails.password);
        console.log(signUpDetails.password1);
        console.log(signUpDetails.password2);
        console.log(signUpDetails);
        document.getElementById("signUp").classList.remove('open-side');
    }

    inputSet = (e) => {
        console.log(e)
        this.setState({[e.target.name]: e.target.value});
    }

    closeAccount() {
        document.getElementById("signUp").classList.remove('open-side');
    }

    openAccount() {
        document.getElementById("myAccount").classList.remove('open-side');
        document.getElementById("signUp").classList.add('open-side');
    }

    render() {
        return (
            <div>
                {/*<SideBar closeAccount={this.closeAccount}></SideBar>*/}
                <div id="myAccount" class="add_to_cart right account-bar">
                    <a href="javascript:void(0)" class="overlay" onClick={this.props.closeAccount}></a>
                    <div class="cart-inner">
                        <div class="cart_top">
                            <h3>my account</h3>
                            <div class="close-cart">
                                <a href="javascript:void(0)" onClick={this.props.closeAccount}>
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <form class="theme-form">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" name="emailId" id="emailId"
                                       placeholder="emailId" onChange={this.inputSet} required=""/>
                            </div>
                            <div class="form-group">
                                <label for="review">Password</label>
                                <input onChange={this.inputSet} type="password" class="form-control" name="password"
                                       id="password" placeholder="password"
                                       required=""/>
                            </div>
                            <div class="form-group">
                                <a onClick={(event) => {
                                    this.login(event);
                                }}
                                   href="javascript:void(0)" class="btn btn-solid btn-md btn-block ">Login 1</a>
                            </div>
                            <div class="accout-fwd">
                                <a href="html/forget-pwd.html" class="d-block"><h5>forget password?</h5></a>
                                <a onClick={this.openAccount} className="d-block"><h6>you have no account ?<span>signup now1</span>
                                    {/*<li className="mobile-user onhover-dropdown Login-v1"*/}
                                    {/*    onClick={this.openAccount}>*/}
                                    {/*    <i className="fa fa-user" aria-hidden="true"*/}
                                    {/*       style={{color: "#fff", fontSize: "30px"}}></i>*/}

                                    {/*</li>*/}
                                </h6></a>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="signUp" className="add_to_cart right account-bar">
                    <a href="javascript:void(0)" className="overlay" onClick={closeAccount}></a>
                    <div className="cart-inner">
                        <div className="cart_top">
                            <h3>sign up</h3>
                            <div className="close-cart">
                                <a href="javascript:void(0)" onClick={closeAccount}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <form className="theme-form">
                            <div className="form-group">
                                <label htmlFor="email">First Name</label>
                                <input type="text" className="form-control" onChange={this.inputSet} name="firstName" id="firstName"
                                       placeholder="First Name" required=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Last Name</label>
                                <input type="text" className="form-control" onChange={this.inputSet} name="lastName" id="lastName"
                                       placeholder="Last Name" required=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" onChange={this.inputSet} name="emailId" id="emailId" placeholder="Email"
                                       required=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="review">Password</label>
                                <input type="password" className="form-control" onChange={this.inputSet} name="password1" id="password1"
                                       placeholder="Enter your password" required=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="review">Retype Password</label>
                                <input type="password" className="form-control" onChange={this.inputSet} name="password2" id="password2"
                                       placeholder="Enter your password" required=""/>
                            </div>
                            <div className="form-group">
                                <a onClick={(event) => {
                                    this.signUp(event);
                                    }
                                }
                                   href="javascript:void(0)"
                                   className="btn btn-solid btn-md btn-block ">Sign Up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

export default SideBar;
