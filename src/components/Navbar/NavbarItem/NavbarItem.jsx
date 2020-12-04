import React from 'react';
import classes from './NavbarItem.module.css';
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => {
    return (
        <div className={classes.item}>
                <NavLink to={props.path} activeClassName={classes.activeLink}>
                    {props.title}
                </NavLink>
            </div>
    )
}

export default NavbarItem;