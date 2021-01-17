import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { ROUTES } from "./constants/constants";

import { AuthenticationContext } from "./context/AuthenticationContext";

import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Routes from "./routes/Routes";

const Tracker = () => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <Header />
      <Sidebar />
      <Routes />
    </>
  );
};

export default Tracker;
