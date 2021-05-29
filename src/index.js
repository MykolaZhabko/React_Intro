import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let dialogData = [
    { id: 1, name: "Mykola" },
    { id: 2, name: "Olena" },
    { id: 3, name: "Gabriella" },
    { id: 4, name: "Sofija" },
    { id: 5, name: "Beatrice" },
    { id: 6, name: "Daniela" }
  ];

ReactDOM.render(<App props={dialogData}/>, document.getElementById("root"));
