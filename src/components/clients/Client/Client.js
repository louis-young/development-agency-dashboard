import React from "react";

import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

const Client = ({ item }) => {
  const { id, company, contact, email, phone } = item;

  return (
    <tr className="table__row">
      <td className="table__cell">
        <Link className="table__link" to={`${ROUTES.CLIENTS}/${id}`}>
          {company}
        </Link>
      </td>
      <td className="table__cell">{contact}</td>
      <td className="table__cell">
        <a className="table__link" href={`mailto:${email}`}>
          {email}
        </a>
      </td>
      <td className="table__cell">
        {" "}
        <a className="table__link" href={`tel:${phone}`}>
          {phone}
        </a>
      </td>
    </tr>
  );
};

export default Client;
