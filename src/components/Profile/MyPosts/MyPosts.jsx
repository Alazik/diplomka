import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="1"/>
                <Post message="Salam bro" likesCount="12"/>
                <Post message="Чуваки сверху пидоры" likesCount="100"/>
            </div>
        </div>

    );
};

export default MyPosts;