import React from "react";
import s from "./Header.module.css"; //css-module

const Header = () => {
    return (
        <header className={s.header}>
            <img src="http://www.rw-designer.com/icon-image/22723-256x256x32.png" />
        </header>
    );
};

export default Header;