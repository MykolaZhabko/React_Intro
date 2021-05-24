import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello React and World!", like_count: 33 },
        { id: 2, message: "Hello React and Mykola!", like_count: 40 },
        { id: 3, message: "Passing props from INDEX.js", like_count: 100 },
      ],
      newPostText: "Zhabko Mykola",
    },
    messagesPage: {
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
    },
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber(state) {
    console.log("State is changed! ");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(
      this.getState().profilePage,
      action
    );
    this._state.messagesPage = dialogsReducer(
      this.getState().messagesPage,
      action
    );
    this._callSubscriber(this.getState());
  },
};

export default store;
