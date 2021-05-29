import React from "react";
import Dialogs from "./Dialogs";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  console.log("mapStateToProps");
  console.log();
  return {
    messagesPage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps");
  console.log(dispatch);
  return {
    updateMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
    addNewTextMessage: () => {
      let action = addNewMessageActionCreator();
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
