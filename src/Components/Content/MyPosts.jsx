import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post";


let postsMassive = [
    {id: 1, message: 'Hi its my first react app', counts: 34, discounts: 22},
    {id: 1, message: 'Hi how are you?', counts: 55, discounts: 2}
]

let posts = postsMassive.map(post => <Post message={post.message} counts={post.counts} discounts={post.discounts}/>)

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
    <div>
        <div>
        <textarea></textarea>
        </div>
        <button>Add post</button>
        <button>Remove post</button>
    </div>
    <div className={classes.posts}>
        {posts}
    </div>
    </div>
     )
    }
        export default MyPosts;