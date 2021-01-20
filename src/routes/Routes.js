import React from "react";

import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../constants/constants";

import Dashboard from "../pages/Dashboard/Dashboard";
import Documentation from "../pages/Documentation/Documentation";
import Domains from "../pages/Domains/Domains";
import Document from "../pages/Document/Document";
import DocumentActions from "../components/DocumentActions/DocumentActions";
import Domain from "../pages/Domain/Domain";
import DomainActions from "../components/DomainActions/DomainActions";
import Clients from "../pages/Clients/Clients";
import ClientActions from "../components/ClientActions/ClientActions";
import Client from "../pages/Client/Client";

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />

      <Route path={`${ROUTES.DOMAINS}/add`} component={DomainActions} />
      <Route path={`${ROUTES.DOMAINS}/:id/edit`} component={DomainActions} />
      <Route path={`${ROUTES.DOMAINS}/:id`} component={Domain} />
      <Route path={ROUTES.DOMAINS} component={Domains} />

      <Route path={`${ROUTES.DOCUMENTATION}/add`} component={DocumentActions} />
      <Route path={`${ROUTES.DOCUMENTATION}/:id/edit`} component={DocumentActions} />
      <Route path={`${ROUTES.DOCUMENTATION}/:id`} component={Document} />
      <Route path={ROUTES.DOCUMENTATION} component={Documentation} />

      <Route path={`${ROUTES.CLIENTS}/add`} component={ClientActions} />
      <Route path={`${ROUTES.CLIENTS}/:id/edit`} component={ClientActions} />
      <Route path={`${ROUTES.CLIENTS}/:id`} component={Client} />
      <Route path={ROUTES.CLIENTS} component={Clients} />
    </Switch>
  );
};

export default Routes;
