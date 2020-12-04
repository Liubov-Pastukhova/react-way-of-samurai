import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const AddPostsForm= (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostBody"} placeholder={"Enter your message"} onChange={props.onPostChange} value={props.newPostText} />
            </div>
            <div>
                <button onClick={props.onAddPost}>Add post</button>
            </div>
        </form>
    )
}
const MyPostsReduxForm = reduxForm({
    form: 'myPosts'
})(AddPostsForm)

const MyPosts = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    let postsElement = props.postsData.map ( post => (<Post message={post.message} key={post.id} likesCount={post.likesCount} />))
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.postsDecoration}>
            <div>My posts</div>
           <MyPostsReduxForm onAddPost={onAddPost} onPostChange={onPostChange} newPostText={props.newPostText} onSubmit={onSubmit} />
            {postsElement}
        </div>
    );
}

export default MyPosts;