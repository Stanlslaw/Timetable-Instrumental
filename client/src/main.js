import React from "react";
import ReactDOM from "react-dom/client";
import "./App/styles/main.scss";
import Div from "./App/components/Div";

console.log('React 18.1.0')

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Div />);
