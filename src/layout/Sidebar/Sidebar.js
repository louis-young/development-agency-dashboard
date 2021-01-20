import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import { ROUTES } from "../../constants/constants";

const Sidebar = () => {
  const { user } = useContext(AuthenticationContext);

  const { displayName: name, photoURL: photo } = user;

  return (
    <aside>
      <h2>Sidebar</h2>

      <img src={photo} alt={name} />
      <h3>{name}</h3>

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
