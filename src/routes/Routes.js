import React from "react";

import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../constants/constants";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

import Dashboard from "../pages/Dashboard/Dashboard";
import Documentation from "../pages/Documentation/Documentation";
import Domains from "../pages/Domains/Domains";
import Projects from "../pages/Projects/Projects";

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path={ROUTES.DASHBOARD} exact component={Dashboard} />
      <ProtectedRoute path={ROUTES.PROJECTS} component={Projects} />
      <ProtectedRoute path={ROUTES.DOMAINS} component={Domains} />
      <ProtectedRoute path={ROUTES.DOCUMENTATION} component={Documentation} />
    </Switch>
  );
};

export default Routes;
