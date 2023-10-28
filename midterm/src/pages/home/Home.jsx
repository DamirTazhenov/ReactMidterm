import React, {useState} from 'react';
import PostForm from "../../components/posts/PostForm";
import PostFilter from "../../components/posts/PostFilter";
import Posts from "../../components/posts/Posts";
import {usePosts} from "../../hooks/usePosts";

const Home = () => {
    const [posts, setPosts] = useState([
        {id: 1, title:"Green Water", body: "Short Description about AGreen Water!"},
        {id: 2, title:"Blue Water", body: "Short Description about Blue Water!"},
        {id: 3, title:"Yellow Water", body: "Short Description about CYellow Water!"}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        alert("create")
        setPosts(posts.filter(p => post.id !== p.id))
    }

    return (
        <div>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <Posts posts={searchedAndSortedPosts} remove={removePost} title={"Twitter"}/>
        </div>
    );
};

export default Home;