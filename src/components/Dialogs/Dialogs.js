import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {

  // let dialogData = [
  //   { id: 1, name: "Mykola" },
  //   { id: 2, name: "Olena" },
  //   { id: 3, name: "Gabriella" },
  //   { id: 4, name: "Sofija" },
  //   { id: 5, name: "Beatrice" },
  //   { id: 6, name: "Daniela" }
  // ];

  let dialogElements = props.map(el => {
    return <DialogItem id={el.id} contact={el.name} />
    }
  )
  
  let messageData = [
    { id: 1, message: "How are you?" },
    { id: 2, message: "What is your name" },
    { id: 3, message: "Try to check my profile!" }
   
  ];

  let messageElement = messageData.map(el => <Message message={el.message} />)

  return (
    <div className={css.dialogs}>
      <div className={css.contact_items}>
        {
          dialogElements
        }
      </div>
      <div className={css.messages_container}>
        {
          messageElement
        }
      
      
      </div>
    </div>
  );
};

export default Dialogs;
