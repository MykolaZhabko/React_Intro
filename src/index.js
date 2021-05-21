import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./components/redux/state";
import { updateNewPostText } from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";
import state, { subscribe } from "./components/redux/state";
//addPost("Hello Before props!!");

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
