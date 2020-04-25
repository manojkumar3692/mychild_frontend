// require("bootstrap/less/bootstrap.less");
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner'
import './dashboard.scss';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// require("bootstrap/less/bootstrap.less");


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
       
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="flex_wrap">
                <ToastContainer />
                <div className="left_block">
                    <div>
                        <div className="left_block_logo">
                            <a className="logo" href="#">LS</a>
                        </div>
                        <ul>
                            <li><a className="football" href="#" title="Football"></a></li>
                            <li><a className="golf" href="#" title="Coming Soon"></a></li>
                        </ul>
                    </div>
                    <a className="refresh" title="Refresh" onClick={() => this.refreshSportative()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.052 286.052"><path d="M78.493 143.181H62.832v-.125c0-43.623 34.809-80.328 79.201-80.122 21.642.098 41.523 8.841 55.691 23.135l25.843-24.931c-20.864-21.043-49.693-34.049-81.534-34.049-63.629 0-115.208 51.955-115.298 116.075h-15.84c-9.708 0-13.677 6.49-8.823 14.437l33.799 33.504c6.704 6.704 10.736 6.91 17.646 0l33.799-33.504c4.854-7.939.876-14.42-8.823-14.42zm205.485-13.945l-33.799-33.433c-6.892-6.892-11.156-6.481-17.637 0l-33.799 33.433c-4.854 7.929-.894 14.419 8.814 14.419h15.635c-.25 43.337-34.943 79.72-79.183 79.514-21.633-.089-41.505-8.814-55.691-23.099l-25.843 24.896c20.873 21.007 49.702 33.996 81.534 33.996 63.432 0 114.869-51.579 115.28-115.298h15.867c9.716-.009 13.676-6.508 8.822-14.428z" fill="#3db39e"/></svg>
                    </a>
                </div>
                <div className="right_block">
                </div>
            </div>
        )
    }
}
export default Dashboard;