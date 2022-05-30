import { useState } from "react";

import classes from './App.module.scss'
import PostsList from "../PostList/PostsList";
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/MyInput/MyInput";

function App() {

  const [posts, setPosts] = useState([

    {id:1, title:'JavaScript 1', body:'Description'},
    {id:2, title:'JavaScript 2', body:'Description'},
    {id:3, title:'JavaScript 3', body:'Description'}

  ])

  const [post, setPost] = useState({title:'',body:''})


  const addNewPost = (e) =>{
    e.preventDefault()

    console.log(posts)

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title:'',body:''})




  }

  return (
    <div className={classes.App}>

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

        <PostsList posts={posts} title="Список постов 1"/>
      
    </div>
  );
}

export default App;
