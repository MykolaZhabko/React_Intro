import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {

  let postData = [
    { id: 1, message: "Hello React and World!", like_count: 33 },
    { id: 2, message: "Hello React and Mykola!", like_count: 40 }
  ];

  
  let postElement = postData.map(el => <Post message={el.message} like_count={el.like_count} />);


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
        {postElement}
    </div>
  );
}

export default MyPosts;
