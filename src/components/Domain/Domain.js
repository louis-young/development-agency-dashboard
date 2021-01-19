import React from "react";

import { Link } from "react-router-dom";

const Domain = ({ id, domain }) => {
  return (
    <li>
      <Link to={`/domains/domain/${id}`}>{domain}</Link>
    </li>
  );
};

export default Domain;
