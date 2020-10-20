import classes from "./Post.module.css";
import React, {useState}from "react";


const Post = (props) => {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);


    return (
    <div className={classes.posts}>
        <div className={classes.item}>
            <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" />
            {props.message}
            <div>
            <span className={classes.like} onClick={() => setLike(like + 1)}>
                <img src="https://img.pngio.com/like-youtube-png-91-images-in-collection-page-2-youtube-like-png-900_500.jpg" />
                {like} </span>
            <span className={classes.dislike} onClick={() => setDislike(dislike + 1)}>
                <img src="https://www.pngfind.com/pngs/m/190-1900259_dislike-youtube-png-red-facebook-thumbs-down-transparent.png"/>
                {dislike} </span>
            </div>
        </div>
    </div>
     )
    }
        export default Post;