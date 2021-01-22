import React from "react";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ children }) => {
  return <ul className="breadcrumbs">{children}</ul>;
};

export default Breadcrumbs;
