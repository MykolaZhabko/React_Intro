import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
function Profile() {
  return (
    <div className={s.content}>
      <div className="card">
        <img src="images/img-3.jpg" alt="" className="card-img" />
      </div>
      <div className="ava-dis">ava + discription</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
