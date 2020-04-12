import React,{Component} from 'react';
import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="login">
                <div className="left_block"></div>
                <form method="post">
                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname"></input>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw"></input>

                        <button type="submit">Login</button>
                    </div>

                    <div class="container">
                        <button type="button" class="cancelbtn">Cancel</button>
                        <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>               
            </div>
        )
    }
}
export default Login;