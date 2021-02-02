import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DocumentationContext } from "../../../context/DocumentationContext";

import { ROUTES } from "../../../constants/constants";

const DocumentRow = ({ item }) => {
  const { id, title, description } = item;

  const { deleteMutation } = useContext(DocumentationContext);

  const deleteDocument = () => {
    if (!window.confirm(`Are you sure you want to delete ${title}?`)) {
      return;
    }

    deleteMutation.mutate(id);
  };

  return (
    <tr className="table__row">
      <td className="table__cell">{title}</td>
      <td className="table__cell">{description}</td>
      <td className="table__cell table__cell--buttons">
        <Link className="button button--small button--view" to={`${ROUTES.DOCUMENTATION}/${id}`}>
          View
        </Link>
        <Link className="button button--small button--edit button--inline" to={`${ROUTES.DOCUMENTATION}/${id}/edit`}>
          Edit
        </Link>
        <button className="button button--small button--delete button--inline" onClick={deleteDocument}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DocumentRow;
