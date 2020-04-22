import React,{Component} from 'react';
import './login.scss';
import { Link } from "react-router-dom";
// import baby1 from '../images/baby1.png';
// import baby2 from '../images/baby2.jpg';
// import baby3 from '../images/baby3.jpg';
// import baby4 from '../images/baby4.jpg';
// import baby5 from '../images/baby5.jpg';
// import baby6 from '../images/baby6.jpg';
// import baby7 from '../images/baby7.jpg';
// import baby8 from '../images/baby8.jpg';

class Login extends Component {
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
                            <title>Login</title>
                            <input type="text" placeholder="Username"></input>

                            <label>Password</label>
                            <input type="password" placeholder="Password"></input>

                            <button type="submit">Login</button>
                        </div>

                        <div class="container btm">
                            {/* <button type="button" class="cancelbtn">Cancel</button> */}
                            <a href="#" class="psw danger">Forgot password?</a>
                            <Link to="./register" class="psw">Create an account</Link>
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
export default Login;