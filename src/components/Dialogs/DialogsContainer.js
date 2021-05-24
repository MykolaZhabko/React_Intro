import React from "react";
import Dialogs from "./Dialogs";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let updateMessageText = (text) => {
          let action = updateNewMessageTextActionCreator(text);
          store.dispatch(action);
        };

        let addNewTextMessage = () => {
          let action = addNewMessageActionCreator();
          store.dispatch(action);
        };
        return (
          <Dialogs
            updateMessageText={updateMessageText}
            addNewTextMessage={addNewTextMessage}
            contacts={store.getState().messagesPage.contacts}
            dialogs={store.getState().messagesPage.dialogs}
            newMessageText={store.getState().messagesPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
