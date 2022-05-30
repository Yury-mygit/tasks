import { useState } from "react";

import classes from './App.module.scss'
import PostsList from "../PostList/PostsList";
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import PostForm from "../PostForm/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript 1', body:'Description'},
    {id:2, title:'JavaScript 2', body:'Description'},
    {id:3, title:'JavaScript 3', body:'Description'}
  ])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }



  return (
    <div className={classes.App}>
        <PostForm create={createPost}/>
        <PostsList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
