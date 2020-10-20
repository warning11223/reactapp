import React from "react";
import classes from './Content.module.css'
import MyPosts from "./MyPosts";
import ProfileInfo from "./Profile";


const Content = (props) => {

    return (
            <div>
                <ProfileInfo/>
                <MyPosts postsMassive={props.state.postsMassive} />
            </div>

    )
}

export default Content;