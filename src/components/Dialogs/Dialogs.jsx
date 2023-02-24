import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + " " + s.active}>
                    Nurik
                </div>
                <div className={s.dialog}>
                    Sula
                </div>
                <div className={s.dialog}>
                    Islam
                </div>
                <div className={s.dialog}>
                    Almaznik
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Siiuuuuuuuuuuuuuuu</div>
                <div className={s.message}>Я просто обожаю 3d хуйню</div>
                <div className={s.message}>Салам бро, как ты?</div>
                <div className={s.message}>Эщс</div>
            </div>
        </div>
    );
};

export default Dialogs;