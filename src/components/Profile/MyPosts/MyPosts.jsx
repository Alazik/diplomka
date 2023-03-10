import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} className={s.textArea}></textarea>
                </div>
                <div>
                    <button onClick={addPost} className={s.buttonPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                
                {postsElement}
        
            </div>
        </div>

    );
};

export default MyPosts;