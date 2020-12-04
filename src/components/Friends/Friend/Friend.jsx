import React from 'react';
import classes from './Friend.module.css';
import { NavLink } from 'react-router-dom';


const Friend = (props) => {

    let path = '/friends/' + props.id;
    return (
        <div className={classes.friend}>
            <NavLink to={path}>
                <img src={props.img} />
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default Friend;