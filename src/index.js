import React from "react";
import ReactDOM from "react-dom";

import EditablePage from "./editablePage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h1 className="Logo">Scheduled Notes</h1>
    <p className="Intro">
      Hellooo{" "}
      <span role="img" aria-label="greetings" className="Emoji">
        👋
      </span>{" "}
      You can add content below! Just type <span className="Code">/</span> to see
      available elements.
    </p>
    <EditablePage />
  </React.StrictMode>,
  rootElement
);

