import React from "react";
import ReactDOM from "react-dom";

import { AuthenticationProvider } from "./context/AuthenticationContext";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Routes from "./routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <Router>
        <Header />
        <Sidebar />
        <Routes />
      </Router>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
