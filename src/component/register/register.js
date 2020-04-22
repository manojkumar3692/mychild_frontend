import React,{Component} from 'react';
import './register.scss';
// import '../login/login.scss';
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="login">
                <div className="top_block normal">
                    <div className="image blk1">
                    </div>
                    <div className="image blk2">
                    </div>
                    <div className="image blk3">
                    </div>
                    <div className="image blk4">
                    </div>
                </div>
                <div className="centre_block normal">
                    <div className="image blk5">
                    </div>
                    <form>
                        <div class="container">
                            <title>Register</title>
                            <input type="text" placeholder="Name"></input>
                            <label>Password</label>
                            <input type="email" placeholder="Email"></input>
                            <input type="number" placeholder="Mobile Number"></input>
                            <input type="password" placeholder="Create Password with minimum 6 character"></input>
                            <div className="more_field">
                                <select>
                                    <option>Relation to Minieli</option>
                                    <option>Father</option>
                                    <option>Mother</option>
                                </select>
                                <button type="file">Upload Photo</button>
                            </div>
                            <button type="submit">Register</button>
                        </div>

                        <div class="container btm">
                            <Link to="/" class="psw">I am already a member</Link>
                        </div>
                    </form>   
                    <div className="image blk6">
                    </div>
                    <div className="image blk5">
                    </div>
                    <div className="image blk7">
                    </div>
                </div>  
                <div className="bottom_block normal">
                    <div className="image blk8"> 
                    </div>
                    <div className="image blk9">
                    </div>
                    <div className="image blk1">
                    </div>
                    <div className="image blk2">
                    </div>
                </div>          
            </div>
        )
    }
}
export default Register;