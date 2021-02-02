import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ProjectsContext } from "../../../context/ProjectsContext";
import { ClientsContext } from "../../../context/ClientsContext";

import { ROUTES } from "../../../constants/constants";

const ProjectRow = ({ item }) => {
  const { id, client, stage, status, type, notes, action } = item;

  const { deleteMutation } = useContext(ProjectsContext);

  const { clients } = useContext(ClientsContext);

  const currentClient = clients?.find(({ id }) => id === client);

  if (!currentClient) {
    return null;
  }

  const { company } = currentClient;

  const deleteProject = () => {
    if (!window.confirm(`Are you sure you want to delete ${company}?`)) {
      return;
    }

    deleteMutation.mutate(id);
  };

  return (
    <tr className="table__row">
      <td className="table__cell">
        <Link className="table__link" to={`${ROUTES.CLIENTS}/${currentClient.id}`}>
          {company}
        </Link>
      </td>
      <td className="table__cell">{stage}</td>
      <td className="table__cell">{status}</td>
      <td className="table__cell">{type}</td>
      <td className="table__cell">{notes}</td>
      <td className="table__cell">{action}</td>
      <td className="table__cell table__cell--buttons">
        <Link className="button button--small button--view" to={`${ROUTES.PROJECTS}/${id}`}>
          View
        </Link>
        <Link className="button button--small button--edit button--inline" to={`${ROUTES.PROJECTS}/${id}/edit`}>
          Edit
        </Link>
        <button className="button button--small button--delete button--inline" onClick={deleteProject}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProjectRow;
