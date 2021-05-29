import React from "react";
import css from "./Message.module.css";

function Message(props) {
  console.log("Hello!");

  if (props.person === "Me") {
    return (
      <div className={css.message_from_me}>
        <h4 className={css.from}>From:{props.person}</h4>
        <div className={css.message_area}>{props.message}</div>
        <span className={css.time}>Time:{props.time}</span>
      </div>
    );
  }
  return (
    <div className={css.message_from_friend}>
      <h4 className={css.from}>From:{props.person}</h4>
      <div className={css.message_area}>{props.message}</div>
      <span className={css.time}>Time:{props.time}</span>
    </div>
  );
}

export default Message;
