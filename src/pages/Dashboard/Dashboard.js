import React from "react";

import useTitle from "../../hooks/useTitle";

const title = "Tracker • Dashboard";

const Dashboard = () => {
  useTitle(title);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
