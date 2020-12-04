import React from 'react';
import classes from './../Navbar.module.css';

const NavbarFriendsItem = (props) => {
    return (
            <div className={classes.navFriendsItem}>
                <div><img src={props.img} /></div>
                <div>{props.name}</div>
            </div>
    )
}

export default NavbarFriendsItem;