import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogElements = props.state.contacts.map((el) => {
    return <DialogItem time={el.id} contact={el.name} />;
  });

  let messageElement = props.state.dialogs.map((el) => (
    <Message time={el.time} person={el.person} message={el.message} />
  ));

  let textMessage = React.createRef();

  let addTextMessage = () => {
    let text = textMessage.current.value;
    alert(text);
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
            id="new_message"
            cols="30"
            rows="10"
          ></textarea>{" "}
          <br />
          <button onClick={addTextMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
