import React from "react";
import css from "./Message.module.css";

function Message(props) {
  return <div className={css.message}>{props.message}</div>;
}

export default Message;
