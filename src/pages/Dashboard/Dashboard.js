import React, { useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import useTitle from "../../hooks/useTitle";

const title = "Tracker • Dashboard";

const Dashboard = () => {
  const { user } = useContext(AuthenticationContext);

  const { displayName: name } = user;

  useTitle(title);

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Hello {name}.</p>
    </div>
  );
};

export default Dashboard;
