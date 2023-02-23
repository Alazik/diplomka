import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://r4.wallpaperflare.com/wallpaper/285/701/304/anime-anime-girls-seymour-ningguang-genshin-impact-genshin-impact-hd-wallpaper-ee9c1bfe5f7632d8907a662a4b7adb8a.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;