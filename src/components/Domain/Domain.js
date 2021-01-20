import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/constants";

const Domain = ({ id, domain }) => {
  return (
    <li>
      <Link to={`${ROUTES.DOMAINS}/${id}`}>{domain}</Link>
    </li>
  );
};

export default Domain;
