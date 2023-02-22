import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://r4.wallpaperflare.com/wallpaper/285/701/304/anime-anime-girls-seymour-ningguang-genshin-impact-genshin-impact-hd-wallpaper-ee9c1bfe5f7632d8907a662a4b7adb8a.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;