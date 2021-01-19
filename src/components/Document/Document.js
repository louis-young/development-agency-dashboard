import React from "react";

import { Link } from "react-router-dom";

const Document = ({ id, title }) => {
  return (
    <li>
      <Link to={`/documentation/document/${id}`}>{title}</Link>
    </li>
  );
};

export default Document;
