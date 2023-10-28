import React, {useState} from 'react';
import Post from "./post/Post";


const Posts = ({posts, title, remove}) => {
    if (!posts.length)
        return <h1 style={{textAlign: "center"}}>Posts not found!</h1>

    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            {posts.map((post, index) => <Post index={index+1} remove={remove} post={post} key={post.id}/>)}
        </div>
    );
};

export default Posts;