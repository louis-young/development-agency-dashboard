import React, { useContext } from "react";

import { DocumentationContext } from "../../context/DocumentationContext";

import useTitle from "../../hooks/useTitle";

import Document from "../../components/Document/Document";

const title = "Tracker • Documentation";

const Documentation = () => {
  useTitle(title);

  const { loading, error, documentation, addMutation } = useContext(DocumentationContext);

  const addDocument = () => {
    const document = {
      title: "Lorem",
      description: "Ipsum",
      content: "Dolor",
    };

    addMutation.mutate(document);
  };

  return (
    <>
      <h1>Documentation</h1>
      <button onClick={addDocument}>Add</button>
      {loading && <p>Loading documentation...</p>}
      {error && <p>Error loading documentation.</p>}
      <ul>
        {documentation &&
          documentation.map((document) => <Document key={document.id} id={document.id} title={document.title} />)}
      </ul>
    </>
  );
};

export default Documentation;
