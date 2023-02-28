import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
    
    let messagesElements = props.messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name="Islam" id="3" />
                <DialogItem name="Almaznik" id="4" /> */}
            </div>
            <div className={s.messages}>

                {messagesElements}

                {/* <Message message={messages[0].message} />
                <Message message={messages[1].message} />
                <Message message={messages[2].message} />
                <Message message={messages[3].message} /> */}
            </div>
        </div>
    );
};

export default Dialogs;