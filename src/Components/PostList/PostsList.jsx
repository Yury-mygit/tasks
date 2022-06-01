import React from 'react';
import {useState} from "react";
import classes from "../App/App.module.scss";
import PostItem from "../PostItem/PostItem";

const PostsList = ({posts,title, remove}) => {

    return (
        <div>
            <h1 className={classes.title}>{title}</h1>

            {  posts.map( (post, index)=>
                <PostItem remove={remove} number={index+1} post={post} key={post.id}/>   )}
        </div>
    );
};

export default PostsList;
