import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DomainsContext } from "../../../context/DomainsContext";
import { ClientsContext } from "../../../context/ClientsContext";

import { ROUTES } from "../../../constants/constants";

const DomainRow = ({ item }) => {
  const { id, company, domain, platform, renewal } = item;

  const { deleteMutation } = useContext(DomainsContext);

  const { clients } = useContext(ClientsContext);

  const client = clients.find((client) => client.id === company);

  const deleteDomain = () => {
    if (!window.confirm(`Are you sure you want to delete ${domain}?`)) {
      return;
    }

    deleteMutation.mutate(id);
  };

  return (
    <tr className="table__row">
      <td className="table__cell">
        <a className="table__link" href={`//${domain}`} target="_blank" rel="noopener noreferrer">
          {domain}
        </a>
      </td>
      <td className="table__cell">
        <Link className="table__link" to={`${ROUTES.CLIENTS}/${client.id}`}>
          {client.company}
        </Link>
      </td>
      <td className="table__cell">{platform}</td>
      <td className="table__cell">
        <time dateTime={renewal}>{renewal}</time>
      </td>
      <td className="table__cell table__cell--buttons">
        <Link className="button button--small button--edit" to={`${ROUTES.DOMAINS}/${id}/edit`}>
          Edit
        </Link>
        <button className="button button--small button--delete button--inline" onClick={deleteDomain}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DomainRow;
