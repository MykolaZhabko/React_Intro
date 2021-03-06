import React from "react";
import { NavLink } from "react-router-dom";
import css from "./DialogItem.module.css";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;
  return (
    <div className={css.contact}>
      <img src="images/person1.png" alt="" />
      <NavLink to={path}>{props.contact}</NavLink>
    </div>
  );
}

export default DialogItem;
