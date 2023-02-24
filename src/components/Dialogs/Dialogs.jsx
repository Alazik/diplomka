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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Nurik" id="1" />
                <DialogItem name="Sula" id="2" />
                <DialogItem name="Islam" id="3" />
                <DialogItem name="Almaznik" id="4" />
            </div>
            <div className={s.messages}>
                <Message message="Siiuuuuuuuuuuuuuuu" />
                <Message message="Я просто обожаю 3d хуйню" />
                <Message message="Салам бро, как ты?" />
                <Message message="Эщс" />
            </div>
        </div>
    );
};

export default Dialogs;