import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Doesnt work here. Cause in Custom react , we made our own render function. Original react render function works differently and expects different type of argument with jsx structure
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com/",
    target: "_blank",
  },
  children: "Click me to go to google!",
};

//Evaluated Expression's value is rendered as it is. So all logic must be donw outside seperately. And only final value should be passed into render! 
const evaluatedExpressionExample = "This is example of evalluated expression.";
const AnotherSyntaxReactElement = React.createElement(
  "a",
  { href: "https://google.com/", target: "_blank" },
  "AnotherSyntaxReactElement",
  evaluatedExpressionExample
);

//Works as react element.
const AnotherReactElement = (
  <a href="https://google.com/" target="_blank">
    Another custom visit google
  </a>
);

createRoot(document.getElementById("root")).render(AnotherSyntaxReactElement);
