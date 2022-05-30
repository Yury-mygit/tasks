import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/Button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title:'',body:''})

    const addNewPost = (e) =>{
        e.preventDefault()

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
    }


    return (
        <form>
            <MyInput
                value={post.title}
                type='text'
                onChange = {e => setPost({...post, title: e.target.value})}
                placeholder="Название аоста"
            />

            <MyInput
                value={post.body}
                type='text'
                onChange = {e => setPost({...post, body: e.target.value})}
                placeholder="Описание поста"
            />

            <MyButton type = "submit" onClick={addNewPost} > Создать пост </MyButton>
        </form>
    );
};

export default PostForm;