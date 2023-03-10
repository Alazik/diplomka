import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img className={s.avatar} src="https://wallpapercave.com/wp/wp10472346.jpg"/>
            <NavLink to={path} className={activeClass => activeClass.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;