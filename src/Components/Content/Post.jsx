import classes from "./Post.module.css";
import React from "react";


const Post = (props) => {
    return (
    <div className={classes.posts}>
        <div className={classes.item}>
            <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" />
            {props.message}
            <div>
            <span>like {props.counts} </span>
            <span>Dislike {props.discounts} </span>
            </div>
        </div>
    </div>
     )
    }
        export default Post;