import React from "react";
import Dialogs from "./Dialogs";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  let updateMessageText = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  let addNewTextMessage = () => {
    let action = addNewMessageActionCreator();
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      updateMessageText={updateMessageText}
      addNewTextMessage={addNewTextMessage}
      contacts={props.store.getState().messagesPage.contacts}
      dialogs={props.store.getState().messagesPage.dialogs}
      newMessageText={props.store.getState().messagesPage.newMessageText}
    />
  );
};

export default DialogsContainer;
