import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/constants";

import dashboard from "../../assets/sidebar/dashboard.svg";
import clients from "../../assets/sidebar/clients.svg";
import domains from "../../assets/sidebar/domains.svg";
import documentation from "../../assets/sidebar/documentation.svg";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link className="sidebar__link" to={ROUTES.DASHBOARD}>
              <img className="sidebar__icon" src={dashboard} alt="Dashboard" title="Dashboard" />
              <p className="sidebar__label">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link className="sidebar__link" to={ROUTES.CLIENTS}>
              <img className="sidebar__icon" src={clients} alt="Clients" title="Clients" />
              <p className="sidebar__label">Clients</p>
            </Link>
          </li>
          <li>
            <Link className="sidebar__link" to={ROUTES.DOMAINS}>
              <img className="sidebar__icon" src={domains} alt="Domains" title="Domains" />
              <p className="sidebar__label">Domains</p>
            </Link>
          </li>
          <li>
            <Link className="sidebar__link" to={ROUTES.DOCUMENTATION}>
              <img className="sidebar__icon" src={documentation} alt="Documentation" title="Documentation" />
              <p className="sidebar__label">Documentation</p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
