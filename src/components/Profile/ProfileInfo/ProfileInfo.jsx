import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://r4.wallpaperflare.com/wallpaper/285/701/304/anime-anime-girls-seymour-ningguang-genshin-impact-genshin-impact-hd-wallpaper-ee9c1bfe5f7632d8907a662a4b7adb8a.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
