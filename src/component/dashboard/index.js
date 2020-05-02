// require("bootstrap/less/bootstrap.less");
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Query } from '@apollo/react-components';
import gql from 'graphql-tag';
import PopupWrapper from '../commonPopup/index'
import Loader from 'react-loader-spinner'
import './dashboard.scss';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import baby8 from '../../images/baby8.jpeg';
import {EVENT_TYPE} from '../../constant/index'
// require("bootstrap/less/bootstrap.less");
const USERQUERY = gql`
    query me($userId:ID!) {
        me(userId:$userId) {
            id,
            name,
            total_reward_amount,
            rewards {
                id,
                amount,
                message,
                name,
                reward_id,
                userId,
                createdAt,
                updatedAt
            }
        }
    }
`

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: '',
            userId: '',
            event_type: []
        }
        this.setUserData = this.setUserData.bind(this)

    }

    componentDidMount() {
        
    }

    setUserData(data) {
        // this.setState({userData:data.me},() => {
        //     this.state.userData.rewards.map((reward,index) => {
        //         EVENT_TYPE.map((each,index) => {
        //             if(each.id == reward.id) {
        //                 return  each['total_reward_amount'] = reward.amount
        //             }
        //         })
        //         return true
        //     })
        //     this.setState({event_type:EVENT_TYPE})
        //     // return true
        // })
        this.setState({userData:data.me},() => {
            EVENT_TYPE.map((each,index) => {
                this.state.userData.rewards.map((reward,index) => {
                    if(each.id === reward.id) {
                        return each['total_reward_amount'] = reward.amount
                    }
                })
            })
            this.setState({event_type:EVENT_TYPE})
        })
    }
    checkError(e) {
        if(e.message === 'GraphQL error: auth_error') { 
            this.props.history.push('/login')
        }
    }

    render() {
        let user = JSON.parse(localStorage.getItem('user_info'))
        // let userId = user.login.id || '1'
        return (
            <Query query={USERQUERY} variables={{ userId: 1 }} onCompleted={this.setUserData} onError={(e) => this.checkError(e)}>
                {(loading, error, data) => {
                    
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
                    <p>Wallet Total - {this.state.userData.total_reward_amount}INR</p>
                                    </div>
                                    <div className="search">
                                        <input type="search" placeholder="Search here"></input>
                                        <button>Search</button>
                                    </div>
                                </div>
                                <ul className="top">
                                    {
                                         EVENT_TYPE.map((event,index) => {
                                            return(
                                                <li key={index}><div className="event_tittle"><span className="tittle">{event.value}</span> <span className="amt">{event.total_reward_amount}</span></div>
                                                <div className="event_icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.04 511.04"><path d="M233.209 104.738c-2.967-3.757-73.296-91.913-128.816-84.252-19.686 2.718-34.847 16.554-45.06 41.123-14.09 33.895-15.261 61.447-3.48 81.889 14.667 25.45 43.739 29.556 44.969 29.719.325.043.653.064.981.064h125.519a7.5 7.5 0 007.5-7.5v-56.395a7.497 7.497 0 00-1.613-4.648zM451.706 61.609c-10.213-24.569-25.373-38.405-45.059-41.123-55.509-7.663-125.85 80.496-128.816 84.252a7.504 7.504 0 00-1.614 4.648v56.395a7.5 7.5 0 007.5 7.5h125.519c.328 0 .656-.021.981-.064 1.23-.163 30.302-4.269 44.969-29.719 11.782-20.443 10.611-47.994-3.48-81.889z" fill="#ff3d43"/><path d="M227.323 138.781H101.804c-.328 0-.656-.021-.981-.064-1.23-.163-30.302-4.268-44.969-29.719-2.828-4.907-4.901-10.228-6.237-15.943-3.727 19.851-1.657 36.746 6.237 50.443 14.667 25.45 43.739 29.556 44.969 29.719.325.043.653.064.981.064h125.519a7.5 7.5 0 007.5-7.5v-34.5a7.5 7.5 0 01-7.5 7.5zM455.186 108.998c-14.667 25.45-43.739 29.556-44.969 29.719a7.482 7.482 0 01-.981.064H283.717a7.5 7.5 0 01-7.5-7.5v34.5a7.5 7.5 0 007.5 7.5h125.519c.328 0 .656-.021.981-.064 1.23-.163 30.302-4.269 44.969-29.719 7.894-13.698 9.964-30.592 6.237-50.443-1.335 5.715-3.409 11.036-6.237 15.943z" fill="#d62d2d"/><path d="M283.717 101.886h-56.395a7.5 7.5 0 00-7.5 7.5v56.395a7.5 7.5 0 007.5 7.5h56.395a7.5 7.5 0 007.5-7.5v-56.395a7.5 7.5 0 00-7.5-7.5z" fill="#d62d2d"/><path d="M219.823 138.781v27a7.5 7.5 0 007.5 7.5h56.395a7.5 7.5 0 007.5-7.5v-27h-71.395z" fill="#9e1219"/><path d="M465.65 232.366H45.39a7.5 7.5 0 00-7.5 7.5v218.568c0 17.972 14.621 32.593 32.593 32.593h370.074c17.972 0 32.593-14.621 32.593-32.593V239.866a7.5 7.5 0 00-7.5-7.5z" fill="#ffd039"/><path d="M465.65 232.366H45.39a7.5 7.5 0 00-7.5 7.5v32.224h435.26v-32.224a7.5 7.5 0 00-7.5-7.5z" fill="#f4b70c"/><path d="M503.54 158.281H7.5a7.5 7.5 0 00-7.5 7.5v74.084a7.5 7.5 0 007.5 7.5h496.04a7.5 7.5 0 007.5-7.5v-74.084a7.5 7.5 0 00-7.5-7.5z" fill="#ffdf65"/><path d="M0 212.865v27a7.5 7.5 0 007.5 7.5h496.04a7.5 7.5 0 007.5-7.5v-27H0z" fill="#ffcd2c"/><path d="M292.603 158.281h-74.167a7.5 7.5 0 00-7.5 7.5v317.745a7.5 7.5 0 007.5 7.5h74.167a7.5 7.5 0 007.5-7.5V165.781a7.5 7.5 0 00-7.5-7.5z" fill="#ff3d43"/><path d="M292.603 158.281h-27v332.745h27a7.5 7.5 0 007.5-7.5V165.781a7.5 7.5 0 00-7.5-7.5z" fill="#d62d2d"/></svg>
                                                </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <PopupWrapper props={this.props} />
                                
                            </div>
                        </div>
                    )
                }}
            </Query>

        )
    }
}
export default withRouter(Dashboard);