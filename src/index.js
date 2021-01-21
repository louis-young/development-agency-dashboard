import React from "react";
import ReactDOM from "react-dom";

import { AuthenticationProvider } from "./context/AuthenticationContext";

import { BrowserRouter as Router } from "react-router-dom";

import Tracker from "./Tracker";

import "./stylesheets/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <Router>
        <Tracker />
      </Router>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
