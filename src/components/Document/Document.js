import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/constants";

const Document = ({ id, title }) => {
  return (
    <li>
      <Link to={`${ROUTES.DOCUMENT}${id}`}>{title}</Link>
    </li>
  );
};

export default Document;
