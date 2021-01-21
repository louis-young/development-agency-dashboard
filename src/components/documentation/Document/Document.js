import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const Document = ({ item }) => {
  const { id, title } = item;

  return (
    <li>
      <Link to={`${ROUTES.DOCUMENTATION}/${id}`}>{title}</Link>
    </li>
  );
};

export default Document;
