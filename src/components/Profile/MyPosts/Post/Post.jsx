import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://pbs.twimg.com/media/ELWjGbOX0AE-tSa?format=jpg&name=4096x4096" />
            post 1
            <div>
                <span>Like</span>
                <span>Dislike</span>
            </div>
        </div>
    );
};

export default Post;