import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const Document = ({ item }) => {
  const { id, title, description } = item;

  return (
    <tr className="table__row">
      <td className="table__cell">
        <Link className="table__link" to={`${ROUTES.DOCUMENTATION}/${id}`}>
          {title}
        </Link>
      </td>
      <td className="table__cell">{description}</td>
    </tr>
  );
};

export default Document;
