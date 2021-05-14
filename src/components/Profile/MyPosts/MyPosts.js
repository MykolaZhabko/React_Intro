import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className="my-post">
      My posts
      <div>New post</div>
      <Post />
    </div>
  );
}

export default MyPosts;
