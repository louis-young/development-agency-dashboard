import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const Client = ({ item }) => {
  const { id, company, contact, email, phone } = item;

  return (
    <tr className="table__row">
      <td className="table__cell">{company}</td>
      <td className="table__cell">{contact}</td>
      <td className="table__cell">
        <a className="table__link" href={`mailto:${email}`}>
          {email}
        </a>
      </td>
      <td className="table__cell">
        <a className="table__link" href={`tel:${phone}`}>
          {phone}
        </a>
      </td>
      <td className="table__cell table__cell">
        <Link className="button" to={`${ROUTES.CLIENTS}/${id}`}>
          View
        </Link>
      </td>
    </tr>
  );
};

export default Client;
