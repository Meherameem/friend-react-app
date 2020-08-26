import React from 'react';
import './Friendlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Friendlist = (props) => {
    const {name, email, phone, website, image} = props.user;
    return (
        <div className='friend-list'>
            <div className='friend-image'>
                <img src={image} alt=""/>
            </div>
               <div className='friend-info'>
               <h3>User Name : {name}</h3>
                <h4>Email : {email}</h4>
                <h4>Phone : {phone}</h4>
                <h4>Website : {website}</h4>
                <button className='add-btn' onClick={() => props.handleAddFriend(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
               </div>
        </div>
    );
};

export default Friendlist;