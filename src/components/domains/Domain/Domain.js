import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const Domain = ({ item }) => {
  const { id, domain } = item;

  return (
    <li className="list__item">
      <Link className="list__link" to={`${ROUTES.DOMAINS}/${id}`}>
        {domain}
      </Link>
    </li>
  );
};

export default Domain;
