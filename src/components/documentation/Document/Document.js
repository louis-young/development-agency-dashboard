import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const Document = ({ item }) => {
  const { id, title } = item;

  return (
    <li className="list__item">
      <Link className="list__link" to={`${ROUTES.DOCUMENTATION}/${id}`}>
        {title}
      </Link>
    </li>
  );
};

export default Document;
