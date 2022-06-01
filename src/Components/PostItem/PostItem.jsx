import React from 'react';
import classes from './PostItem.module.scss'
import "./PostItem.module.scss"

const PostItem = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.post__content}>
               <strong> {props.number}. {props.post.title} </strong>
               <div>
                   {props.post.body}
               </div>
            </div>
            <div className={classes.post__btns}>
               <button onClick={()=> props.remove(props.post)}>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;