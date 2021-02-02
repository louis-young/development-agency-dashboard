import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ClientsContext } from "../../../context/ClientsContext";
import { DomainsContext } from "../../../context/DomainsContext";
import { ProjectsContext } from "../../../context/ProjectsContext";

import { ROUTES } from "../../../constants/constants";

const ClientRow = ({ item }) => {
  const { id, company, contact, email, phone } = item;

  const { deleteMutation } = useContext(ClientsContext);

  const { domains } = useContext(DomainsContext);

  const { projects } = useContext(ProjectsContext);

  const clientDomains = domains?.filter(({ company }) => company === id);

  const clientProjects = projects?.filter(({ client }) => client === id);

  const deleteClient = () => {
    if (clientDomains.length) {
      alert(`Please first all delete domains associated with ${company}.`);
      return;
    }
    if (clientProjects.length) {
      alert(`Please first delete all projects associated with ${company}.`);
      return;
    }

    if (!window.confirm(`Are you sure you want to delete ${company}?`)) {
      return;
    }

    deleteMutation.mutate(id);
  };

  return (
    <tr className="table__row">
      <td className="table__cell">
        <Link to={`${ROUTES.CLIENTS}/${id}`} className="table__link">
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
        <a className="table__link" href={`tel:${phone}`}>
          {phone}
        </a>
      </td>
      <td className="table__cell table__cell--buttons">
        <Link className="button button--small button--view" to={`${ROUTES.CLIENTS}/${id}`}>
          View
        </Link>
        <Link className="button button--small button--edit button--inline" to={`${ROUTES.CLIENTS}/${id}/edit`}>
          Edit
        </Link>
        <button className="button button--small button--delete button--inline" onClick={deleteClient}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
