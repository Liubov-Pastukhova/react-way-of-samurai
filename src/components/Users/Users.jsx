import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userAvatar.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.usersPageContainer}>
                <div className={styles.usersPageNav}>
                    { pages.map (p => {
                        return <span className={`${props.currentPage === p && styles.selectedPage } ${styles.pageNumber}`} onClick={() => { props.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
                <div className={styles.userCardContainer}>
                    {props.users.map(u => <div className={styles.usersCard} key={u.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id); }}>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id); }}>Follow</button>}

                            </div>
                        </div>
                        <div>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </div>
                    </div>)}
                </div>
               
            </div>
        )
}
 
export default Users;