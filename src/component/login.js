import React,{Component} from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import {Query,Mutation} from 'react-apollo'
import './login.scss';

const LOGIN = gql `
    mutation login($email:String,$password:String) {
        login(name:$name,password:$password) {
            message
        }
    }
`

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Mutation mutation={LOGIN} >
            {(loginUser,{data}) => {
                return (
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
                            <label>Username</label>
                            <input type="text" placeholder="Username"></input>

                            <label>Password</label>
                            <input type="password" placeholder="Password"></input>

                            <button type="submit">Login</button>
                        </div>

                        <div class="container btm">
                            {/* <button type="button" class="cancelbtn">Cancel</button> */}
                            <a href="#" class="psw danger">Forgot password?</a>
                            <a href="#" class="psw">Create an account</a>
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
            }} 
         </Mutation>
            
        )
    }
}
export default Login;