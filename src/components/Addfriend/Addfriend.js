import React from 'react';
import './Addfriend.css'

const Addfriend = (props) => {
    const add = props.add;
    return (
        <div className='add-friend'>
            <h1>Total Sent Requests: {add.length}</h1>
    <h3>The names of the friends are: <ul>{add.map(item => <li>{item.name}</li>)}</ul></h3>
        </div>
    );
};

export default Addfriend;