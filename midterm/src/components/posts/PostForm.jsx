import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', description: ''})

    const addNewPost= (e)=>{
        e.preventDefault()
        create(post)
        setPost({title: '', description: ''})
    }

    return (
        <form>
            <MyInput
                type="text"
                placeholder="MyInput title"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="MyInput description"
                value={post.description}
                onChange={e => setPost({...post, description:e.target.value})}
            />
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;