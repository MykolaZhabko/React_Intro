import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postElement = props.state.posts.map((el) => (
    <Post message={el.message} like_count={el.like_count} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={css.my_posts}>
      <h3>My posts</h3>
      <div className={css.add_new_post}>
        <div>
          <textarea
            name="new_post"
            ref={newPostElement}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add new post</button>
        </div>
      </div>
      <div>New post</div>
      {postElement}
    </div>
  );
}

export default MyPosts;
