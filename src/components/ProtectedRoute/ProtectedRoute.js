import React, { useContext } from "react";

import { Route, useHistory } from "react-router-dom";

import { AuthenticationContext } from "../../context/AuthenticationContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthenticationContext);

  const history = useHistory();

  if (!user) {
    history.push("/login");

    return null;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
