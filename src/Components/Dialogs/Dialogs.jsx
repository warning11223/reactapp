import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";








const Dialogs = (props) => {
    let dialogElements = props.state.nameMassive.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElements = props.state.messageMassive.map(message => <Message message={message.message}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let post = newPostElement.current.value;
        alert(post)
    }

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem messageMassive={props.messageMassive} nameMassive={props.nameMassive}/>
                <Message/>
                {dialogElements}
            </div>
    <div className={classes.messages}>
        {messageElements}
        <textarea ref={newPostElement}></textarea>
        <div>
        <button onClick={addPost}>Add post</button>
        </div>
        </div>
        </div>
    )
}

export default Dialogs
