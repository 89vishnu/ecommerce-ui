import React, {Component} from "react";
import LoginSignUp from "./js/Login-SignUp";
import {TopToBottomBar} from "./js/topToBottomBar";
import {HomeDropDownBar} from "./js/homeDropDownBar";
import {ShopDropDownBar} from "./js/shopDropDownBar";
import {ProductDropDownBar} from "./js/productDropDownBar";
import {FeaturesDropDownBar} from "./js/featuresDropDownBar";
import {BlogDropDownBar} from "./js/blogDropDownBar";

import {MyWishList} from "./js/MyWishList";
import {MyWishListDetail} from "./js/MyWishListDetail";
import {CheckOut} from "./js/CheckOut";
import {CartPage} from "./js/CartPage";
import {MyCart} from "./js/MyCart";
import {HomeMiddleContent} from "./js/HomeMiddleContent";
import {FeaturesBar} from "./js/FeaturesBar";
import {ShopByCategoryDetails} from "./js/ShopByCategoryDetails";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginTokens: {
                accessToken: null,
                refreshToken: null
            },
            emailId: null,
            password: null
        }
       // this.openAccount = this.openAccount.bind(this);
        this.closeAccount = this.closeAccount.bind(this);
        //this.shopByCategory = this.shopByCategory.bind(this);
    }

    closeAccount() {
        console.log("remove")
        document.getElementById("myAccount").classList.remove('open-side');
        document.getElementById("searchbar-input-id").classList.remove('show');
        document.getElementById("myCartId").classList.remove('open-side');
        document.getElementById("myWishList").classList.remove('open-side');
    }

    // shopByCategory() {
    //     document.getElementById("searchbar-input-id").classList.add('show');
    // }
    //
    // openShopingCart() {
    //     document.getElementById("myCartId").classList.add('open-side');
    // }
    //
    // openWishList() {
    //     document.getElementById("myWishList").classList.add('open-side');
    // }
    //
    // inputSet = (e) => {
    //     console.log(e)
    //     this.setState({[e.target.name]: e.target.value});
    // }

    render() {
        return (
            <div>
                <LoginSignUp closeAccount={this.closeAccount}></LoginSignUp>
                <ShopByCategoryDetails></ShopByCategoryDetails>
                <FeaturesBar></FeaturesBar>
                <HomeMiddleContent></HomeMiddleContent>
                <MyCart></MyCart>
                <CartPage></CartPage>
                <CheckOut></CheckOut>
                <MyWishList></MyWishList>
                <MyWishListDetail></MyWishListDetail>
            </div>

        );
    }
}

export {Home}
