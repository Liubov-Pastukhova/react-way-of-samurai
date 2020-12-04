import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../data/profilePage-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts);

export default MyPostsContainer;