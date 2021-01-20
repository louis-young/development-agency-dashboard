import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const DocumentItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`${ROUTES.DOCUMENTATION}/${id}`}>{title}</Link>
    </li>
  );
};

export default DocumentItem;
