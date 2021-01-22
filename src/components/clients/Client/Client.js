import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ClientsContext } from "../../../context/ClientsContext";
import { DomainsContext } from "../../../context/DomainsContext";

import { ROUTES } from "../../../constants/constants";

const Client = ({ item }) => {
  const { id, company, contact, email, phone } = item;

  const { deleteMutation } = useContext(ClientsContext);

  const { domains } = useContext(DomainsContext);

  const clientDomains = domains?.filter((domain) => domain.company === id);

  const deleteClient = () => {
    if (clientDomains.length) {
      alert(`Please delete domains associated with ${company}.`);
      return;
    }

    if (!window.confirm(`Are you sure you want to delete ${company}?`)) {
      return;
    }

    deleteMutation.mutate(id);
  };

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
      <td className="table__cell table__cell--buttons">
        <Link className="button button--small button--view" to={`${ROUTES.CLIENTS}/${id}`}>
          View
        </Link>
        <Link className="button button--small button--edit" to={`${ROUTES.CLIENTS}/${id}/edit`}>
          Edit
        </Link>
        <button className="button button--small button--delete" onClick={deleteClient}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Client;
