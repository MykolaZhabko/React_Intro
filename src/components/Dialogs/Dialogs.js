import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../redux/dialogs-reducer";

const Dialogs = (props) => {
  console.log("Dialogs");
  console.log(props);
  let dialogElements = props.messagesPage.contacts.map((el) => {
    return <DialogItem time={el.id} contact={el.name} />;
  });

  let messageElement = props.messagesPage.dialogs.map((el) => (
    <Message time={el.time} person={el.person} message={el.message} />
  ));

  let textMessage = React.createRef();

  let onUpdateMessageText = () => {
    let text = textMessage.current.value;
    props.updateMessageText(text);
  };

  let onAddNewTextMessage = () => {
    props.addNewTextMessage();
  };

  return (
    <div className={css.dialogs}>
      <div className={css.contact_items}>{dialogElements}</div>
      <div className={css.messages_container}>
        {messageElement}
        <div className={css.text_message}>
          <textarea
            name="new_message"
            ref={textMessage}
            onChange={onUpdateMessageText}
            value={props.messagesPage.newMessageText}
            id="new_message"
            cols="30"
            rows="10"
          ></textarea>{" "}
          <br />
          <button onClick={onAddNewTextMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
