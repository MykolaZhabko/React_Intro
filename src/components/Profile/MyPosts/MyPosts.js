import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className={css.my_posts}>
      <h3>My posts</h3>
      <div className={css.add_new_post}>
        <div>
          <textarea
            name="new_post"
            id="new_post"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <button>Add new post</button>
        </div>
      </div>
      <div>New post</div>
      <Post message="Hello World!" like_count="33" />
      <Post message="Hello React" like_count="40" />
    </div>
  );
}

export default MyPosts;
