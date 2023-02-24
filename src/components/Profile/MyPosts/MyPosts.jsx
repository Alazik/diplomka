import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={s.textArea}></textarea>
                </div>
                <div>
                    <button className={s.buttonPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="1" />
                <Post message="Salam bro" likesCount="12" />
                <Post message="Чуваки сверху пидоры" likesCount="100" />
            </div>
        </div>

    );
};

export default MyPosts;