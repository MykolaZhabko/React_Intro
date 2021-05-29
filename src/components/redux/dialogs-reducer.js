const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState = {
  contacts: [
    { id: 1, name: "Mykola" },
    { id: 2, name: "Olena" },
    { id: 3, name: "Gabriella" },
    { id: 4, name: "Sofija" },
    { id: 5, name: "Beatrice" },
    { id: 6, name: "Daniela" },
  ],
  dialogs: [
    { time: 123, person: "Ikin", message: "How are you?" },
    { time: 123, person: "Ikin", message: "What is your name" },
    { time: 123, person: "Me", message: "Try to check my profile!" },
    { time: 123, person: "Ikin", message: "How old are you?" },
    { time: 123, person: "Me", message: "I am not born yet" },
    { time: 123, person: "Ikin", message: "Are you kidding me?" },
  ],
  newMessageText: "Hello World!",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newText };

    case ADD_NEW_MESSAGE:
      if (state.newMessageText != "") {
        let newMessage = {
          time: 777,
          person: "Me",
          message: state.newMessageText,
        };

        return {
          ...state,
          dialogs: [...state.dialogs, newMessage],
          newMessageText: "",
        }; 
      }
      break;
  }

  return state;
};

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });

export default dialogsReducer;
