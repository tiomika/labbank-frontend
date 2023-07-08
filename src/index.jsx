import ReactDOM from "react-dom/client";
import React from "react";

import App from "./components/App";

import "./assets/styles/normalize.css";
import "./assets/styles/colors.css";
import "./assets/styles/defaults.css";

const Comp = React.createElement(
  "h1",
  {
    name: "Mika",
  },
  "Hello World!"
);

const root = ReactDOM.createRoot(document.getElementById("raiz"));
root.render(<App />);
