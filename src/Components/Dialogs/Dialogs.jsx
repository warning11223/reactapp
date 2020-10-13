import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




let nameMassive = [
    {id: 1,name: 'Денис'},
    {id: 2,name: 'Женя'},
    {id: 3,name: 'Света'},
    {id: 4,name: 'Дима'},
    {id: 5,name: 'Таня'},
]

let messageMassive = [
    {id:1, message: 'Hello'},
    {id:1, message: 'Hi'},
    {id:1, message: 'Welcome'},
    {id:1, message: 'How are you?'}
]

let dialogElements = nameMassive.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}/>)
let messageElements = messageMassive.map(message => <Message message={message.message}/>)

const Dialogs = (props) => {
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem />
                <Message/>
                {dialogElements}
            </div>
    <div className={classes.messages}>
        {messageElements}
        </div>
        </div>
    )
}

export default Dialogs
