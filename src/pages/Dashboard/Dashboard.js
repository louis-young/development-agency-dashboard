import React, { useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import useTitle from "../../hooks/useTitle";

import { getTimeOfDay } from "../../utilities/utilities";

import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const title = "Tracker • Dashboard";

const Dashboard = () => {
  const { user } = useContext(AuthenticationContext);

  const { displayName: name } = user;

  useTitle(title);

  const greeting = getTimeOfDay();

  return (
    <div>
      <Breadcrumbs>
        <Breadcrumb title="Dashboard" active />
      </Breadcrumbs>

      <p>
        Good {greeting}, {name}.
      </p>
    </div>
  );
};

export default Dashboard;
