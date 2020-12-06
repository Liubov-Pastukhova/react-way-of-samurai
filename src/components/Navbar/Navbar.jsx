import React from 'react';
import classes from './Navbar.module.css';
import NavbarFriendsItem from './NavbarFriendsItem/NavbarFriendsItem';
import NavbarItem from './NavbarItem/NavbarItem';


const Navbar = (props) => {

    let navbarElements = props.navbarItems.map(navItem =>
        (<NavbarItem path={navItem.path}
            title={navItem.title} key={navItem.id} />))
    let navbarFriendsElements = props.dialogsData.map(navFriendsItem =>
        (<NavbarFriendsItem img={navFriendsItem.img}
            name={navFriendsItem.name} key={navFriendsItem.id} />))
    return (
        <div>
            <nav className={classes.nav}>
                <div>{navbarElements}</div>
                <div  className={classes.navFriendsItemBlock}>{navbarFriendsElements}</div>
            </nav>
        </div>
    );
}

export default Navbar;