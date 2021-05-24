import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./components/redux/redux-store";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
// store.state.profilePage.newPostText = "HelloReact!!";
rerenderEntireTree();

store.subscribe(rerenderEntireTree);
