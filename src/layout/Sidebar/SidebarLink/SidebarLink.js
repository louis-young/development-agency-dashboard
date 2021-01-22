import React from "react";

import { Link, useLocation } from "react-router-dom";

import { getActiveLink } from "../../../utilities/utilities";

const SidebarLink = ({ text, link, icon }) => {
  const location = useLocation();

  const activeLink = getActiveLink(location);

  const active = link === `/${activeLink}`;

  return (
    <li>
      <Link className={active ? "sidebar__link sidebar__link--active" : "sidebar__link"} to={link}>
        <img className="sidebar__icon" src={icon} alt={text} title={text} />
        <p className="sidebar__label">{text}</p>
      </Link>
    </li>
  );
};

export default SidebarLink;
