import React from 'react';
import classes from './Header.module.css';
import mainLogo from '../../assets/images/mainLogo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={classes.header}>
            <div>
                <img src={mainLogo} />
            </div>
            <div className={classes.loginBlock}>
    { props.isAuth ? <span>{props.login}</span> : <NavLink to={'/login'}>Log in</NavLink>}
                
            </div>
        </header>
    );
}

export default Header;