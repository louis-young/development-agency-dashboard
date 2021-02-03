import React from "react";

import { ROUTES } from "../../constants/constants";

import dashboard from "../../assets/sidebar/dashboard.svg";
import clients from "../../assets/sidebar/clients.svg";
import projects from "../../assets/sidebar/projects.svg";
import domains from "../../assets/sidebar/domains.svg";
import documentation from "../../assets/sidebar/documentation.svg";

import SidebarLink from "./SidebarLink/SidebarLink";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar__list">
          <SidebarLink text="Dashboard" link={ROUTES.DASHBOARD} icon={dashboard} />
          <SidebarLink text="Clients" link={ROUTES.CLIENTS} icon={clients} />
          <SidebarLink text="Projects" link={ROUTES.PROJECTS} icon={projects} />
          <SidebarLink text="Domains" link={ROUTES.DOMAINS} icon={domains} />
          <SidebarLink text="Documentation" link={ROUTES.DOCUMENTATION} icon={documentation} />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
