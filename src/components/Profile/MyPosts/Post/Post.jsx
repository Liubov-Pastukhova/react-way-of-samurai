import React from 'react';
import classes from './Post.module.css';



const Post = (props) => {
   
    return (
            <div className={classes.posts}>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
                <div className={classes.item}>{props.message}</div>
                <button>Like</button> 
                {props.likesCount}
                <button>Dislike</button> 
            </div>
    );
}

export default Post;