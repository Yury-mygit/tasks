import React from 'react';
import {useState} from "react";
import classes from "../App/App.module.scss";
import Post from "../Posts/Post";

const PostsList = ({posts,title}) => {




    return (
        <div>
            <h1 className={classes.title}>{title}</h1>

            {  posts.map( (post, index)=>
                <Post number={index+1} post={post} key={post.id}/>   )}
        </div>
    );
};

export default PostsList;
