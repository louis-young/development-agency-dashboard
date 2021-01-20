import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/constants";

const Client = ({ id, client }) => {
  return (
    <li>
      <Link to={`${ROUTES.CLIENTS}/${id}`}>{client}</Link>
    </li>
  );
};

export default Client;
