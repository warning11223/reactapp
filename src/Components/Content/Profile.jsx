import React from "react";
import classes from "./Profile.module.css"


const ProfileInfo = (props) => {
    return (
        <div>
            <img src="https://media0.giphy.com/media/3oxRmkKSBxU6i60qsM/giphy.gif" />
            <img src="https://media0.giphy.com/media/3oxRmkKSBxU6i60qsM/giphy.gif" />
            <img src="https://media0.giphy.com/media/3oxRmkKSBxU6i60qsM/giphy.gif" />
            <img src="https://media0.giphy.com/media/3oxRmkKSBxU6i60qsM/giphy.gif" />
            <img src="https://media0.giphy.com/media/3oxRmkKSBxU6i60qsM/giphy.gif" />
            <div className={classes.descriptionBlock}>
                ava+descr
            </div>
        </div>
    )

}

export default ProfileInfo