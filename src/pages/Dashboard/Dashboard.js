import React, { useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import useTitle from "../../hooks/useTitle";

import { getTimeOfDay } from "../../utilities/utilities";

const title = "Tracker • Dashboard";

const Dashboard = () => {
  const { user } = useContext(AuthenticationContext);

  const { displayName: name } = user;

  useTitle(title);

  const greeting = getTimeOfDay();

  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Good {greeting}, {name}.
      </p>
    </div>
  );
};

export default Dashboard;
