import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ClientsContext } from "../../../context/ClientsContext";

import { ROUTES } from "../../../constants/constants";

const Domain = ({ item }) => {
  const { id, company, domain, platform, renewal } = item;

  const { clients } = useContext(ClientsContext);

  const client = clients.find((client) => client.id === company);

  return (
    <tr className="table__row">
      <td className="table__cell">
        <Link className="table__link" to={`${ROUTES.DOMAINS}/${id}`}>
          {domain}
        </Link>
      </td>
      <td className="table__cell">
        <Link className="table__link" to={`${ROUTES.CLIENTS}/${client.id}`}>
          {client.company}
        </Link>
      </td>
      <td className="table__cell">{platform}</td>
      <td className="table__cell">{renewal}</td>
    </tr>
  );
};

export default Domain;
