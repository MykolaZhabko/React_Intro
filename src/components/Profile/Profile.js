import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      {/* <MyPosts state={props.state} dispatch={props.dispatch} /> */}
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
