import React from "react";

import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../constants/constants";

import Dashboard from "../pages/Dashboard/Dashboard";

import ClientForm from "../components/Forms/ClientForm/ClientForm";
import Client from "../pages/Clients/Client/Client";
import Clients from "../pages/Clients/Clients";

import ProjectForm from "../components/Forms/ProjectForm/ProjectForm";
import Project from "../pages/Projects/Project/Project";
import Projects from "../pages/Projects/Projects";

import DomainForm from "../components/Forms/DomainForm/DomainForm";
import Domains from "../pages/Domains/Domains";

import DocumentForm from "../components/Forms/DocumentForm/DocumentForm";
import Document from "../pages/Documentation/Document/Document";
import Documentation from "../pages/Documentation/Documentation";

const ACTIONS = {
  ADD: "/add",
  EDIT: "/:id/edit",
  VIEW: "/:id",
};

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />

      <Route path={`${ROUTES.CLIENTS}${ACTIONS.ADD}`} component={ClientForm} />
      <Route path={`${ROUTES.CLIENTS}${ACTIONS.EDIT}`} component={ClientForm} />
      <Route path={`${ROUTES.CLIENTS}${ACTIONS.VIEW}`} component={Client} />
      <Route path={ROUTES.CLIENTS} component={Clients} />

      <Route path={`${ROUTES.PROJECTS}${ACTIONS.ADD}`} component={ProjectForm} />
      <Route path={`${ROUTES.PROJECTS}${ACTIONS.EDIT}`} component={ProjectForm} />
      <Route path={`${ROUTES.PROJECTS}${ACTIONS.VIEW}`} component={Project} />
      <Route path={ROUTES.PROJECTS} component={Projects} />

      <Route path={`${ROUTES.DOMAINS}${ACTIONS.ADD}`} component={DomainForm} />
      <Route path={`${ROUTES.DOMAINS}${ACTIONS.EDIT}`} component={DomainForm} />
      <Route path={ROUTES.DOMAINS} component={Domains} />

      <Route path={`${ROUTES.DOCUMENTATION}${ACTIONS.ADD}`} component={DocumentForm} />
      <Route path={`${ROUTES.DOCUMENTATION}${ACTIONS.EDIT}`} component={DocumentForm} />
      <Route path={`${ROUTES.DOCUMENTATION}${ACTIONS.VIEW}`} component={Document} />
      <Route path={ROUTES.DOCUMENTATION} component={Documentation} />
    </Switch>
  );
};

export default Routes;
