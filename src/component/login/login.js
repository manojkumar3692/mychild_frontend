import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Mutation } from '@apollo/react-components';
import './login.scss';

const LOGIN = gql`
    mutation login($email:String!,$password:String!) {
        login(email:$email,password:$password) {
            token
        }
    }
`

class Login extends Component {
    constructor(props) {
        super(props)
    }
    afteLogin(data) {
        let token = data.login.token
        localStorage.setItem('valid-token',token)
    }
    render() {
        let email;
        let password;
        return (
            <Mutation mutation={LOGIN} onCompleted={this.afteLogin} >
                {(userLogin, { loading, error, data, onCompleted }) => {
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
                                <div className="form_container">
                                    <div className="container">
                                        <title>Login</title>
                                        <input ref={node => {
                                            email = node;
                                        }} type="text" placeholder="Username"></input>
                                        <label>Password</label>
                                        <input ref={node => {
                                            password = node;
                                        }} type="password" placeholder="Password"></input>

                                        <button onClick={() => {
                                            userLogin({variables: { email: email.value, password: password.value }})
                                                
                                        }} type="button">{loading ? 'Please Wait ...' : 'Login'}</button>
                                    </div>

                                    <div className="container btm">
                                        {/* <button type="button" class="cancelbtn">Cancel</button> */}
                                        <a href="#" className="psw danger">Forgot password?</a>
                                        <Link to="./register" className="psw">Create an account</Link>
                                    </div>
                                    {
                                        error && <h4 className="form_container_error">{error.graphQLErrors.map(({ message }, i) => (
                                            <span key={i}>{message}</span>
                                        ))}</h4>
                                    }
                                </div>
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