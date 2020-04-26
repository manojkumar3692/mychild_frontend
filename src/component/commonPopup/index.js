import React,{useState} from 'react';
import Popup from "reactjs-popup";
import { Link,withRouter,Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import {EVENT_TYPE} from '../../constant/index'
import  './popup.scss'
import gql from 'graphql-tag';

const CREATE_REWARD = gql`
mutation createReward($amount:String!,$message:String!,$user_id:ID!,$reward_id:ID!) {
    createReward(amount:$amount,message:$message,user_id:$user_id,reward_id:$reward_id) {
        amount,
        message,
        user_id,
        reward_id
    }
}
`
const PopupWrapper = (props) => {
    let user = JSON.parse(localStorage.getItem('user_info'))
    let user_id = user.login.id
    const [amount,setAmount] = useState()
    const [message,setMessage] = useState()
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [eventID, setEventName] = useState('');
    const variables = {amount: amount,message: message,user_id:user_id,reward_id:eventID}
    const [addReward,{loading}] = useMutation(CREATE_REWARD,{
        variables: variables
    });
    const submit = async () => {
        try {
          const { data } = await addReward()
          setData(data)
        }
        catch (e) {
          setError(e.message)
        }
      }

     const check = (data) => {
         debugger
     } 

    return (
        <div>
            <Popup trigger={<button className="button"> Open Modal </button>}  modal closeOnDocumentClick  className="manoj">
                {close => (
                    <div className="modal">
                        <div>
                            <select onChange={(event) => setEventName(event.target.value)}>
                                {
                                    EVENT_TYPE.map((event,index) => {
                                        return (
                                        <option value={event.id} key={index}>{event.value}</option>
                                        )
                                    })
                                }
                            </select>
                            <input onChange={(event) => setAmount(event.target.value)} placeholder="amount"></input>
                            <input onChange={(event) => setMessage(event.target.value)}  placeholder="message"></input>
                            <button onClick={() => submit()}>{loading ? 'Loading': 'Submit'}</button>
                            <button onClick={() => close()}>Cancel</button>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    )
}

export default PopupWrapper
