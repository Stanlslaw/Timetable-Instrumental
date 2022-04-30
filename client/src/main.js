import React from "react";
import ReactDOM from "react-dom/client";
import "./App/styles/main.scss";
import Div from "./App/components/div";
import Table from "./App/components/body/table"

console.log('React 18.1.0')

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Table />);

const pre_container = document.getElementById("pre_root");
const pre_root = ReactDOM.createRoot(pre_container);
pre_root.render(<Div />);

