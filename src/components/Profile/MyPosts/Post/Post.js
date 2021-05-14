import React from "react";
import s from "./Post.module.css";
function Post() {
  return (
    <div>
      <div className={s.item}>
        <img src="images/saitama.jpeg" alt="" />
        Post 1
      </div>
    </div>
  );
}

export default Post;
