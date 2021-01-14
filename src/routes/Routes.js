import React from "react";

import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

import Dashboard from "../pages/Dashboard/Dashboard";
import Documentation from "../pages/Documentation/Documentation";
import Domains from "../pages/Domains/Domains";
import Projects from "../pages/Projects/Projects";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <ProtectedRoute path="/projects" component={Projects} />
      <ProtectedRoute path="/domains" component={Domains} />
      <ProtectedRoute path="/documentation" component={Documentation} />
    </Switch>
  );
};

export default Routes;
