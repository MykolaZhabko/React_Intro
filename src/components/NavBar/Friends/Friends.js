import React from "react";
import css from "./Friends.module.css";

function Friends() {
  return (
    <div className={css.container}>
      <h3>Friends</h3>
      <div className={css.friends_container}>
        <div className={css.one_persone}>
          <img src="images/person1.png" alt="" />
          <p>Dima</p>
        </div>
        <div className={css.one_persone}>
          <img src="images/person2.png" alt="" />
          <p>Vova</p>
        </div>
        <div className={css.one_persone}>
          <img src="images/person3.png" alt="" />
          <p>Karl</p>
        </div>
      </div>
    </div>
  );
}

export default Friends;
