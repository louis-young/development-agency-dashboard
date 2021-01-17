import React from "react";

import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../constants/constants";

import Dashboard from "../pages/Dashboard/Dashboard";
import Documentation from "../pages/Documentation/Documentation";
import Domains from "../pages/Domains/Domains";
import Projects from "../pages/Projects/Projects";

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
      <Route path={ROUTES.PROJECTS} component={Projects} />
      <Route path={ROUTES.DOMAINS} component={Domains} />
      <Route path={ROUTES.DOCUMENTATION} component={Documentation} />
    </Switch>
  );
};

export default Routes;
