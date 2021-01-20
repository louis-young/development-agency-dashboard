import React from "react";

import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../constants/constants";

import Dashboard from "../pages/Dashboard/Dashboard";
import Documentation from "../pages/Documentation/Documentation";
import Domains from "../pages/Domains/Domains";
import Document from "../pages/Document/Document";
import Domain from "../pages/Domain/Domain";
import DomainActions from "../components/DomainActions/DomainActions";

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
      <Route path={`${ROUTES.DOMAINS}/add`} component={DomainActions} />
      <Route path={`${ROUTES.DOMAINS}/:id/edit`} component={DomainActions} />
      <Route path={`${ROUTES.DOMAINS}/:id`} component={Domain} />
      <Route path={ROUTES.DOMAINS} component={Domains} />
      <Route path={`${ROUTES.DOCUMENT}:id`} component={Document} />
      <Route path={ROUTES.DOCUMENTATION} component={Documentation} />
    </Switch>
  );
};

export default Routes;
