import React from 'react';
import MyButton from "../../UI/button/MyButton";
import classes from "./Post.module.css"
import {Link} from "react-router-dom";

const Post = ({index, post, remove}) => {

    const removePost = () =>{
        console.log(post)
        remove(post)
    }

    return (
        <div className={classes.post}>
            <div className={classes.postText}>
                <Link to="/posts/:postId"><h1>{index}. {post.title}</h1></Link>
                <p>{post.body}</p>
            </div>
            <div className={classes.postBtn}>
                <MyButton onClick={removePost} className="button">Delete Post</MyButton>
            </div>

        </div>
    );
};

export default Post;