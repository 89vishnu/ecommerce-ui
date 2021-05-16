import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailId : null,
            password : null
        }
    }
    login(event) {
        var loginDetails = {
            emailId: this.state.emailId,
            password: this.state.password
        }
        console.log(" emailid : "+this.state.emailId);
        console.log(" password  : "+this.state.password);
        console.log(event.toString());
        console.log(" loginDetails : "+loginDetails.emailId);
    }

    inputSet=(e)=> {
        console.log(e)
        this.setState({[e.target.name] : e.target.value});
    }
    render() {
        return (
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
                            <input type="text" class="form-control" name="emailId" id="emailId" placeholder="emailId" onChange={this.inputSet} required=""/>
                        </div>
                        <div class="form-group">
                            <label for="review">Password</label>
                            <input onChange={this.inputSet} type="password" class="form-control" name="password" id="password" placeholder="password"
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
                            <a href="html/register.html" class="d-block"><h6>you have no account
                                ?<span>signup now</span></h6></a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


}

export default SideBar;
