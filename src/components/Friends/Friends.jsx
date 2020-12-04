import React from 'react';
import Friend from './Friend/Friend';


const Friends = (props) => {

    let friendsElements = props.dialogsData.map(friend =>
        (<Friend id={friend.id}
            name={friend.name}
            img={friend.img} />))

    return (
        <div>
            <div>{friendsElements}</div>
        </div>
    );
}

export default Friends;