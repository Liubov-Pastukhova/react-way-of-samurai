import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => (<DialogItem id={dialog.id} name={dialog.name} key={dialog.id} img={dialog.img} />))
    let messagesElements = state.messagesData.map(message => (<Message message={message.message} key={message.id} />))

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>{dialogsElements}</div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div className={classes.textarea}>
                    <textarea onChange={onMessageChange} value={state.newMessageText} />
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;