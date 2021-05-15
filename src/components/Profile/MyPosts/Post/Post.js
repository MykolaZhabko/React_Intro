import React from "react";
import s from "./Post.module.css";
function Post(props) {
  return (
    <div>
      <div className={s.item}>
        <img src="images/saitama.jpeg" alt="" />
        {props.message} <br />
        <span>Likes:{props.like_count}</span>
      </div>
    </div>
  );
}

export default Post;
