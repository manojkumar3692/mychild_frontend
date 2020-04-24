import React, { Component } from 'react';
import { FAMILY_RELATION } from '../../constant/index';

import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
import './register.scss';
// import '../login/login.scss';
import { Link } from "react-router-dom";
const { useMutation } = require('@apollo/react-hooks');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: 'AKIAI7BMQW7SQRCNW7ZQ',
  secretAccessKey: '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'
});
const fs = require('fs')
const REGISTER = gql`
    mutation register($name:String!,$email:String!,$mobile_number:String!,$password:String!,$family_relation_id:ID!) {
        register(name:$name,email:$email,mobile_number:$mobile_number,password:$password,family_relation_id:$family_relation_id) {
            message
        }
    }
`
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            familyRelation: 0,
            profileImage: {}
        }
    }

    setFamilyRelation(event) {
        this.setState({ familyRelation: event.target.value })
    }

    render() {
        let name;
        let password;
        let email;
        let mobile;
        return (
            <Mutation mutation={REGISTER}>
                {(userRegister, { loading, error, data, onCompleted }) => {
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
                                        <title>Register</title>
                                        <input ref={node => { name = node }} type="text" placeholder="Name"></input>
                                        <label>Password</label>
                                        <input ref={node => { email = node }} type="email" placeholder="Email"></input>
                                        <input ref={node => { mobile = node }} type="number" placeholder="Mobile Number"></input>
                                        <input ref={node => { password = node }} type="password" placeholder="Create Password with minimum 6 character"></input>
                                        <div className="more_field">
                                            <select onChange={(event) => {
                                                this.setFamilyRelation(event)
                                            }}>
                                                <option value={0} default>Relation to Minieli</option>
                                                {
                                                    FAMILY_RELATION.map((family, index) => {
                                                        return (
                                                            <option value={family.id} key={index}>{family.value}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            
                                        </div>
                                        {/* <div style={{width:'100%'}}> 
                                            <input onChange={(event) => this.uploadImage(event)} type='file' />
                                        </div> */}
                                        <button onClick={() => {
                                            userRegister({ variables: { name: name.value, email: email.value, mobile_number: mobile.value, password: password.value, family_relation_id: this.state.familyRelation} });
                                        }} type="submit">{loading ? 'Please Wait ...' : 'Register'}</button>
                                    </div>

                                    <div className="container btm">
                                        <Link to="/" className="psw">I am already a member</Link>
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
export default Register;