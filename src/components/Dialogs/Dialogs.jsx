import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={activeClass => activeClass.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

let dialogsData = [
    { id: 1, name: "Nurik" },
    { id: 2, name: "Sula" },
    { id: 3, name: "Islam" },
    { id: 4, name: "Almaznik" },
];

let messagesData = [
    { id: 1, message: "Siiuuuuuuuuuuuuuuu" },
    { id: 2, message: "Я просто обожаю 3d хуйню" },
    { id: 3, message: "Салам бро, как ты?" },
    { id: 4, message: "Эщс" },
];

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name="Islam" id="3" />
                <DialogItem name="Almaznik" id="4" />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    );
};

export default Dialogs;