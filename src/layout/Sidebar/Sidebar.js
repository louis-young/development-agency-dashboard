import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/constants";

const Sidebar = () => {
  return (
    <aside>
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
          </li>
          <li>
            <Link to={ROUTES.CLIENTS}>Clients</Link>
          </li>
          <li>
            <Link to={ROUTES.DOMAINS}>Domains</Link>
          </li>

          <li>
            <Link to={ROUTES.DOCUMENTATION}>Documentation</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
