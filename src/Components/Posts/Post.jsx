import React from 'react';
import classes from './Post.module.scss'
import "./Post.module.scss"

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.post__content}>
               <strong> {props.number}. {props.post.title} </strong>
               <div>
                   {props.post.body}
               </div>
            </div>
            <div className={classes.post__btns}>
               <button>Удалить</button>
            </div>
        </div>
    );
};

export default Post;