import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import classes from './ProfileInfo.module.css';
import positiveLogo from '../../../assets/images/yes.png';
import negativeLogo from '../../../assets/images/no.png';
import profileBanner from '../../../assets/images/profileBanner.jpg';
import userPhoto from '../../../assets/images/userAvatar.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={classes.profile}>
                <div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} />
                </div>
                <ProfileStatus status={props.status ? props.status : "No status"} updateStatus={props.updateStatus} />
                <div>
                   <span>Full name: </span>
                   <span>{props.profile.fullName}</span>
                </div>
                <div>
                   <span>About me: </span>
                   <span>{props.profile.aboutMe}</span>
                </div>
                <div>
                   <span>Contacts: </span>
                   <ul>
                       { props.profile.contacts.facebook != null ? <li>facebook: {props.profile.contacts.facebook}</li> : null}
                       { props.profile.contacts.github != null ? <li>github: {props.profile.contacts.github}</li> : null}
                       { props.profile.contacts.instagram != null ? <li>instagram: {props.profile.contacts.instagram}</li> : null}
                       { props.profile.contacts.twitter != null ? <li>twitter: {props.profile.contacts.twitter}</li> : null}
                       { props.profile.contacts.vk != null ? <li>vk: {props.profile.contacts.vk}</li> : null}
                   </ul>
                </div>
                <div>
                   <span>Looking for a job: </span>
                   <span>{ props.profile.lookingForAJob ? 
                   <img src={positiveLogo}/> :
                   <img src={negativeLogo}/> }</span>
                </div>
                <div>
                   <span>Looking for a job description: </span>
                   <span>{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;