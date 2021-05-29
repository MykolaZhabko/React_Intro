import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  console.log("Mykla Here");
  console.log(props);
  let postElement = props.posts.map((el) => (
    <Post message={el.message} like_count={el.like_count} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={css.my_posts}>
      <h3>My posts</h3>
      <div className={css.add_new_post}>
        <div>
          <textarea
            name="new_post"
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add new post</button>
        </div>
      </div>
      <div>New post</div>
      {postElement}
    </div>
  );
}

export default MyPosts;
