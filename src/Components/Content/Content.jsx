import React from "react";
import classes from './Content.module.css'
import MyPosts from "./MyPosts";
import ProfileInfo from "./Profile";


const Content = () => {
    return (
            <div>
                <ProfileInfo/>
           <MyPosts/>
            </div>

    )
}

export default Content;