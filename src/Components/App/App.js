import {useMemo, useState} from "react";
import classes from './App.module.scss'
import PostsList from "../PostList/PostsList";
import PostForm from "../PostForm/PostForm";
import MySelect from "../UI/Select/MySelect";
import MyInput from "../UI/MyInput/MyInput";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript 1', body:'Des435ption'},
    {id:2, title:'JavaScript 2', body:'Des35ption'},
    {id:3, title:'JavaScript 3', body:'Description'}
  ])

    const [selectedSort, setSelectedSort] = useState('')

    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo( ()=>{
        console.log('Отработала функция')
        if (selectedSort){
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts] )

    const sortedAndSearchedPosts = useMemo( ()=>{
            return sortedPosts.filter(post=> post.title.toLowerCase().includes(searchQuery))
        }, [searchQuery,sortedPosts]
    )

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p=> p.id != post.id))
    }

    const sortPosts = (sort) =>{
      setSelectedSort( sort   )

    }

  return (
    <div className={classes.App}>
        <PostForm  create={createPost}/>

        <hr className={classes.line} />


        <MyInput
            value = {searchQuery}
            onChange = {e => setSearchQuery(e.target.value)}
            placeholder='Поиск...'
        />

        <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue=" Сортировка по "
            options={[
                { value:'title', name:'По названию'},
                { value:'body', name:'По описанию'}
            ]}
        />

        {
            sortedAndSearchedPosts.length !== 0
            ? <PostsList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title="Список постов 1"/>
            : <h1 className={classes.PostPlaceHolder}>Посты не найдены</h1>
        }

    </div>
  );
}

export default App;
