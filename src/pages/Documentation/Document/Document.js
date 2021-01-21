import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { DocumentationContext } from "../../../context/DocumentationContext";

import { ROUTES } from "../../../constants/constants";

const Document = () => {
  const { id } = useParams();

  const { documentation, deleteMutation } = useContext(DocumentationContext);

  if (!documentation) {
    return <p>Loading document...</p>;
  }

  const document = documentation.find((document) => document.id === id);

  const { title, description, content } = document;

  const deleteDocument = () => {
    deleteMutation.mutate(id);
  };

  return (
    <section>
      <h2>Document</h2>

      <h3>{title}</h3>

      <p>{description}</p>
      <p>{content}</p>

      <Link className="button" to={`${ROUTES.DOCUMENTATION}/${id}/edit`}>
        Edit
      </Link>
      <button className="button button--danger" onClick={deleteDocument}>
        Delete
      </button>
    </section>
  );
};

export default Document;
