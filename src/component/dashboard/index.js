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
        this.setState({userData:data.me},() => {
            this.state.userData.rewards.map((reward,index) => {
                EVENT_TYPE.map((each,index) => {
                    if(each.id == reward.id) {
                        return  each['total_reward_amount'] = reward.amount
                    }
                })
                return true
            })
            this.setState({event_type:EVENT_TYPE})
            // return true
        })
    }
    checkError(e) {
        if(e.message === 'GraphQL error: auth_error') { 
            this.props.history.push('/login')
        }
    }

    render() {
        let user = JSON.parse(localStorage.getItem('user_info'))
        let userId = user.login.id
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
                                         this.state.event_type.map((event,index) => {
                                            return(
                                                <li key={index}>{event.value} {event.total_reward_amount}</li>
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