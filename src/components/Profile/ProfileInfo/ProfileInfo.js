import React from "react";
import css from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <div>
      <div className={css.card}>
        <img src="images/img-3.jpg" alt="" className={css.card_img} />
      </div>
      <div className={css.ava}>ava + discription</div>
    </div>
  );
}

export default ProfileInfo;
