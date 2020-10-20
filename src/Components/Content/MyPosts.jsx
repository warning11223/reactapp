import classes from "./MyPosts.module.css";
import Post from "./Post";
import React, {useState} from 'react';





const MyPosts = (props) => {
   /* let posts =
        props.postsMassive.map(post => <Post message={post.message} counts={post.counts} discounts={post.discounts}/>)*/
        const [post, setPost] = useState([]);
        const [text, setText] = useState('');


    let newPostElement = React.createRef();

    let addPost = () => {
        setPost([...post, <Post message={text} />]);
        setText('');


    }



    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
    <div>
        <div>
            <input value={text} type="text" onChange={(event) => {
                setText(event.target.value);
            }}/>
        </div>
        <button onClick={addPost}>Add post</button>
        <button>Remove post</button>
    </div>
    <div className={classes.posts}>
        {post}
    </div>
    </div>
     )
    }
        export default MyPosts;