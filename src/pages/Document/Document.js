import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import { DocumentationContext } from "../../context/DocumentationContext";

const Document = () => {
  const { id } = useParams();

  const { documentation, deleteMutation } = useContext(DocumentationContext);

  const document = documentation.find((document) => document.id === id);

  const { title, description, content } = document;

  const deleteDocument = () => {
    deleteMutation.mutate(id);
  };

  return (
    <section>
      <h1>Document</h1>

      <h2>{title}</h2>

      <p>{description}</p>
      <p>{content}</p>

      <button onClick={deleteDocument}>Delete</button>
    </section>
  );
};

export default Document;
