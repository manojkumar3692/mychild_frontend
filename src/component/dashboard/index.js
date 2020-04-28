// require("bootstrap/less/bootstrap.less");
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link,withRouter,Redirect } from 'react-router-dom';
import PopupWrapper from '../commonPopup/index'
import Loader from 'react-loader-spinner'
import './dashboard.scss';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import baby8 from '../../images/baby8.jpeg';
// require("bootstrap/less/bootstrap.less");


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
        this.getUserData = this.getUserData.bind(this)
       
    }

    componentDidMount() {
        this.getUserData()
    }

    getUserData() {
        let user = JSON.parse(localStorage.getItem('user_info'))
    }


    render() {
        return (
            <div className="flex_wrap">
                <ToastContainer />
                <div className="left_block">
                        <a className="logo" href="#"><img src={baby8} alt="Logo"></img></a>
                        <ul>
                            <li><a className="football" href="#" title="Football">Photos</a></li>
                            <li><a className="golf" href="#" title="Coming Soon">Transactions</a></li>
                            <li><a className="golf" href="#" title="Coming Soon">My Planing</a></li>
                            <li><a className="golf" href="#" title="Coming Soon">My Favorates</a></li>
                            <li><a className="golf" href="#" title="Coming Soon">Settings</a></li>
                        </ul>
                </div>
                <div className="right_block">
                    <div className="search_block">
                        <div className="profile_lite">
                            <p className="color">Miniali Appa</p>
                            <p>Wallet Total - 20,000INR</p>
                        </div>
                        <div className="search">
                            <input type="search" placeholder="Search here"></input>
                            <button>Search</button>
                        </div>
                    </div>
                    <ul className="top">
                        <li>Savings</li>
                        <li>Birthday Gifts</li>
                        <li>Education Pack</li>
                        <li>Shoppings</li>
                    </ul>
                    <PopupWrapper props={this.props}/>
                </div>
            </div>
        )
    }
}
export default withRouter(Dashboard);