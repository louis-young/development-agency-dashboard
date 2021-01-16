import React, { useContext } from "react";

import { Redirect, Route } from "react-router-dom";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import { ROUTES } from "../../constants/constants";

const ProtectedRoute = ({ component: Component, path, exact }) => {
  const { user } = useContext(AuthenticationContext);

  return user ? <Route path={path} exact={exact} component={Component} /> : <Redirect to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;
