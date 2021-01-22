import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const Document = ({ item }) => {
  const { id, title, description } = item;

  return (
    <tr className="table__row">
      <td className="table__cell">{title}</td>
      <td className="table__cell">{description}</td>
      <td className="table__cell">
        <Link className="button" to={`${ROUTES.DOCUMENTATION}/${id}`}>
          View
        </Link>
      </td>
    </tr>
  );
};

export default Document;
