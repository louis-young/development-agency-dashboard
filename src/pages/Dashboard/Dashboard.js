import React, { useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import useTitle from "../../hooks/useTitle";

import { getTimeOfDay } from "../../utilities/utilities";

import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import "./Dashboard.scss";

const title = "Tracker • Dashboard";

const Dashboard = () => {
  const { user } = useContext(AuthenticationContext);

  const { displayName: name } = user;

  useTitle(title);

  const greeting = getTimeOfDay();

  return (
    <article className="dashboard">
      <div className="page__actions">
        {" "}
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" active />
        </Breadcrumbs>
      </div>

      <p className="dashboard__greeting">
        Good {greeting}, {name}.
      </p>
    </article>
  );
};

export default Dashboard;
