import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const Client = ({ item }) => {
  const { id, company } = item;

  return (
    <li className="list__item">
      <Link className="list__link" to={`${ROUTES.CLIENTS}/${id}`}>
        {company}
      </Link>
    </li>
  );
};

export default Client;
