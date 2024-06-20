import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const root = ReactDom.createRoot(document.querySelector("#root"));

console.log("root00--", root);

root.render(
  <>
    <App />
  </>
);

// JSX vs JS
// JSX stand for JavaScript XML or JS Extensible
// JSX allow to write HTML like syntax inside javascript file

/**
 * What is component?
 * Component is like smaller part of any react project.
 * Component can be reused multiple time
 * Component is written like a function then it got exported
 * Always write component file name in Pascal-case
 */
