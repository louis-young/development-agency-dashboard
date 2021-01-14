import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import { AuthenticationProvider } from "./context/AuthenticationContext";

import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Routes from "./routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <Header />
        <Sidebar />
        <Routes />
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
