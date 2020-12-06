import React from 'react';
import classes from './NavbarFriendsItem.module.css';

const NavbarFriendsItem = (props) => {
    return (
        <div>
            <div className={classes.navFriendsItem}>
                <div><img src={props.img} /></div>
                <div>{props.name}</div>
            </div>
        </div>
    )
}

export default NavbarFriendsItem;