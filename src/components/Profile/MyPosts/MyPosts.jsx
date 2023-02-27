import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: "1"},
    {id: 2, message: "Salam bro", likesCount: "12"},
    {id: 3, message: "Чуваки сверху пидоры", likesCount: "100"}
];

let postsElement = posts.map (p => <Post message={p.message} likesCount={p.likesCount} />)

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
                
                {postsElement}
                
                {/* <Post message={posts[0].message} likesCount={posts[0].likesCount} />
                <Post message={posts[1].message} likesCount={posts[1].likesCount} />
                <Post message={posts[2].message} likesCount={posts[2].likesCount} /> */}
            </div>
        </div>

    );
};

export default MyPosts;