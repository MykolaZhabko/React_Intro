import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.contact_items}>
        <DialogItem id="1" contact="Mykola" />
        <DialogItem id="2" contact="Olena" />
        <DialogItem id="3" contact="Gabriella" />
        <DialogItem id="4" contact="Sofija" />
        <DialogItem id="5" contact="Beatrice" />
        <DialogItem id="6" contact="Daniela" />
      </div>
      <div className={css.messages_container}>
        <Message message="Haw are you?" />
        <Message message="What is you name?" />
        <Message message="Try to check my profile! " />
      </div>
    </div>
  );
};

export default Dialogs;
