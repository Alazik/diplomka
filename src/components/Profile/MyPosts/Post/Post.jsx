import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://pbs.twimg.com/media/ELWjGbOX0AE-tSa?format=jpg&name=4096x4096" />
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Post;