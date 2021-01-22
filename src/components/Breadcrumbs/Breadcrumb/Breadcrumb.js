import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

const Breadcrumb = ({ title, link, active }) => {
  return (
    <>
      <li className={active ? "breadcrumb breadcrumb--active" : "breadcrumb"}>
        {link ? (
          <Link className="breadcrumb__link" to={link}>
            {title}
          </Link>
        ) : (
          title
        )}
      </li>
      {!active && <span className="breadcrumbs__separator">/</span>}
    </>
  );
};

export default Breadcrumb;
