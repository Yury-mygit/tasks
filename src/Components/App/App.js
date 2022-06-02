import {useMemo, useState} from "react";
import classes from './App.module.scss'
import PostsList from "../PostList/PostsList";
import PostForm from "../PostForm/PostForm";
import MySelect from "../UI/Select/MySelect";
import MyInput from "../UI/MyInput/MyInput";
import PostFilter from "../PostFilter/postFilter";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript 1', body:'Des435ption'},
    {id:2, title:'JavaScript 2', body:'Des35ption'},
    {id:3, title:'JavaScript 3', body:'Description'}
  ])

   const[filter, setFilter]=useState({sort:'',query:''})

    const sortedPosts = useMemo( ()=>{
        console.log('Отработала функция sortedPosts')
        if (filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts] )


    const sortedAndSearchedPosts = useMemo( ()=>{
            console.log('Отработала функция sortedAndSearchedPosts')
            return sortedPosts.filter(post=> post.title.toLowerCase().includes(filter.query))
        }, [filter.query,sortedPosts]
    )




    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p=> p.id != post.id))
    }



  return (
    <div className={classes.App}>
        <PostForm  create={createPost}/>

        <hr className={classes.line} />

        <PostFilter filter={filter} setFilter={setFilter}/>

            <PostsList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="Список постов 1"
            />
    </div>
  );
}

export default App;
