import React, { useState } from 'react';
import Friendlist from '../Friendlist/Friendlist';
import Addfriend from '../Addfriend/Addfriend';
import user from '../../fakeData/user';

const Friend = () => {
    console.log(user);
    const userList = user;
    const [add,setAdd] = useState([]);
    const handleAddFriend = (user) => {
        //console.log('User Added',user.name);
        const newAdd = [...add, user];
        setAdd(newAdd);
    }
    return (
        <div style={{display:'flex'}}>
            <div>
                {userList.map(user => <Friendlist handleAddFriend = {handleAddFriend} user={user}></Friendlist>)}
            </div>
            <div>
            <Addfriend add={add}></Addfriend>
            </div>
        </div>
    );
};

export default Friend;