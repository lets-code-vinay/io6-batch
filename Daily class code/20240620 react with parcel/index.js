import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.querySelector("#root"));

console.log("root00--", root);

root.render(
  <>
    <h1>Hello from React</h1>
    <h2>How are you</h2>
  </>
);

// JSX
