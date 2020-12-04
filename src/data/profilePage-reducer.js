import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';


let initialState = {
    postsData: [
        { id: 1, message: "It's my first post. How are you?", likesCount: 25 },
        { id: 2, message: "Second post", likesCount: 15 },
        { id: 3, message: "Third post", likesCount: 10 }
    ],
    newPostText: 'new post',
    profile: null,
    status: ''
}


const profilePageReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, { id: 4, message: state.newPostText, likesCount: 0}]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
            newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile 
            }
        }
        case SET_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
export const addPost = () => {
    return {type: ADD_POST}
}
export const updateNewPostText = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatusProfile = (status) => {
    return {type: SET_STATUS_PROFILE, status}
}
export const getUserProfile = (userId) => (dispatch) => {
    return profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatusProfile = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusProfile(response.data));
        });
}
export const updateStatusProfile = (status) => (dispatch) => {
    return profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0)
            dispatch(setStatusProfile(status));
        });
}
export default profilePageReducer;